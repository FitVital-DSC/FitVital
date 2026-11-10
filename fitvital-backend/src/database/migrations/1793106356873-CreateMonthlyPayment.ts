import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMonthlyPayment1793106356873 implements MigrationInterface {
  name = 'CreateMonthlyPayment1793106356873';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "finances"');
    await queryRunner.query(
      `CREATE TYPE "finances"."monthly_payment_status_enum" AS ENUM('PENDING', 'PAID', 'OVERDUE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "finances"."monthly_payment" ("monthlyPaymentId" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" uuid NOT NULL, "status" "finances"."monthly_payment_status_enum" NOT NULL, "value" numeric(12,2) NOT NULL, "datePayment" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_monthly_payment_id" PRIMARY KEY ("monthlyPaymentId"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "finances"."monthly_payment"');
    await queryRunner.query('DROP TYPE "finances"."monthly_payment_status_enum"');
    await queryRunner.query('DROP SCHEMA IF EXISTS "finances"');
  }
}
