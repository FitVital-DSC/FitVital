#!/usr/bin/env bash
# Verificacao automatizada do ambiente containerizado (API + banco em Docker Compose).
# Uso: ./http-rest-client/containerizado/run-checks.sh [--durability]
# Nao grava dados, nao remove volumes e nao altera migrations.
set -u

BASE="${BASE_URL:-http://localhost:3000}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/../.." || exit 1

pass=0
fail=0
durability=0

if [ "${1:-}" = "--durability" ]; then
  durability=1
elif [ "${1:-}" != "" ]; then
  echo "Argumento nao suportado: $1"
  exit 2
fi

check() {
  description="$1"
  expected="$2"
  obtained="$3"
  if [ "$obtained" = "$expected" ]; then
    echo "ok - $description | esperado=$expected | obtido=$obtained"
    pass=$((pass + 1))
  else
    echo "FALHA - $description | esperado=$expected | obtido=$obtained"
    fail=$((fail + 1))
  fi
}

status() {
  curl -sS --max-time 10 -o /dev/null -w '%{http_code}' "$@"
}

sql() {
  docker compose exec -T postgres sh -c 'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -tA' <<< "$1"
}

make_token() {
  payload="$1"
  secret="${JWT_SECRET:-fitvital-dev-change-me}"
  JWT_SECRET_VALUE="$secret" TOKEN_PAYLOAD="$payload" node -e '
    const crypto = require("crypto");
    const enc = (value) => Buffer.from(value).toString("base64url");
    const header = enc(JSON.stringify({alg:"HS256",typ:"JWT"}));
    const payload = enc(process.env.TOKEN_PAYLOAD);
    const sig = crypto.createHmac("sha256", process.env.JWT_SECRET_VALUE).update(header+"."+payload).digest("base64url");
    process.stdout.write(header+"."+payload+"."+sig);
  '
}

echo "UC08 - Verificacao HTTP automatizada"
echo "BASE_URL=$BASE"

api_state="$(docker compose ps api --format json 2>/dev/null | tr -d '\n')"
if printf '%s' "$api_state" | grep -q '"State":"running"'; then
  check "servico API em execucao" "running" "running"
else
  check "servico API em execucao" "running" "parado"
fi

db_state="$(docker compose ps postgres --format json 2>/dev/null | tr -d '\n')"
if printf '%s' "$db_state" | grep -q '"Health":"healthy"'; then
  check "banco postgres healthy" "healthy" "healthy"
else
  check "banco postgres healthy" "healthy" "unhealthy"
fi

check "GET /" "200" "$(status "$BASE/")"
check "GET rota inexistente" "404" "$(status "$BASE/rota-inexistente")"

migrations_output="$(docker compose exec -T api pnpm migration:show:prod 2>&1)"
if printf '%s' "$migrations_output" | grep -Eq 'pending|\\[ \\]|Pending'; then
  check "migrations pendentes" "0" "pendentes"
else
  check "migrations pendentes" "0" "0"
fi

check "GET /schedulings sem autenticacao" "401" "$(status "$BASE/schedulings")"

missing_payload='{"sub":"student-1","exp":4102444800}'
missing_token="$(make_token "$missing_payload")"
check "GET /schedulings token sem clientId" "403" "$(status -H "Authorization: Bearer $missing_token" "$BASE/schedulings")"

client_id="$(sql 'SELECT "clientId" FROM "scheduling"."scheduling" LIMIT 1;' | tr -d '[:space:]')"
if [ -n "$client_id" ]; then
  valid_payload="{\"clientId\":\"$client_id\",\"exp\":4102444800}"
  valid_token="$(make_token "$valid_payload")"
  check "GET /schedulings com registros" "200" "$(status -H "Authorization: Bearer $valid_token" "$BASE/schedulings")"
else
  empty_payload="{\"clientId\":\"00000000-0000-4000-8000-000000000000\",\"exp\":4102444800}"
  empty_token="$(make_token "$empty_payload")"
  check "GET /schedulings sem registros" "404" "$(status -H "Authorization: Bearer $empty_token" "$BASE/schedulings")"
fi

check "GET rota inexistente UC08" "404" "$(status -H "Authorization: Bearer ${valid_token:-}" "$BASE/schedulings/rota-inexistente")"

if [ "$durability" -eq 1 ]; then
  before_count="$(sql 'SELECT count(*) FROM "scheduling"."scheduling";' | tr -d '[:space:]')"
  docker compose restart api >/dev/null 2>&1
  retries=0
  while [ "$retries" -lt 30 ]; do
    smoke_after="$(status "$BASE/" 2>/dev/null)"
    [ "$smoke_after" = "200" ] && break
    retries=$((retries + 1))
    sleep 1
  done
  check "durabilidade: GET / apos reinicio da API" "200" "$smoke_after"
  after_count="$(sql 'SELECT count(*) FROM "scheduling"."scheduling";' | tr -d '[:space:]')"
  check "durabilidade: quantidade de agendamentos" "${before_count:-FALHA}" "${after_count:-FALHA}"
fi

echo
echo "Resultado: $pass ok, $fail falha(s)"
[ "$fail" -eq 0 ]
