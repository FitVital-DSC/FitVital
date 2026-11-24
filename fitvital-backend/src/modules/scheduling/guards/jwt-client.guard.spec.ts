import { describe, expect, it } from 'vitest';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { createHmac } from 'node:crypto';
import { JwtClientGuard } from './jwt-client.guard.js';
import type { ExecutionContext } from '@nestjs/common';

function jwt(payload: object): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', 'test-secret')
    .update(`${header}.${body}`)
    .digest('base64url');
  return `${header}.${body}.${signature}`;
}

describe('JwtClientGuard', () => {
  it('canActivate stores clientId on the request', () => {
    process.env.JWT_SECRET = 'test-secret';
    const request: { headers: Record<string, string>; clientId?: string } = {
      headers: {},
    };
    request.headers.authorization = `Bearer ${jwt({ clientId: 'client-1', exp: 4102444800 })}`;
    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
      }),
    } as ExecutionContext;

    expect(new JwtClientGuard().canActivate(context)).toBe(true);
    expect(request.clientId).toBe('client-1');
  });

  it('rejects a request without a bearer token', () => {
    process.env.JWT_SECRET = 'test-secret';
    const guard = new JwtClientGuard();
    expect(() => guard.verify('')).toThrow(UnauthorizedException);
  });

  it('rejects a token without clientId', () => {
    process.env.JWT_SECRET = 'test-secret';
    const guard = new JwtClientGuard();
    expect(() => guard.verify(`Bearer ${jwt({ sub: 'student-1', exp: 4102444800 })}`))
      .toThrow(ForbiddenException);
  });

  it('returns clientId from a valid token', () => {
    process.env.JWT_SECRET = 'test-secret';
    const guard = new JwtClientGuard();
    expect(guard.verify(`Bearer ${jwt({ clientId: 'client-1', exp: 4102444800 })}`))
      .toBe('client-1');
  });

  it('rejects a token with an unsupported algorithm', () => {
    process.env.JWT_SECRET = 'test-secret';
    const guard = new JwtClientGuard();
    const header = Buffer.from(JSON.stringify({ alg: 'none', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ clientId: 'client-1', exp: 4102444800 })).toString('base64url');
    expect(() => guard.verify(`Bearer ${header}.${payload}.signature`))
      .toThrow(UnauthorizedException);
  });
});
