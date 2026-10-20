import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateScheduling1792519581400 implements MigrationInterface {
    name = 'CreateScheduling1792519581400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "scheduling"."scheduling_status_enum" AS ENUM('pending', 'confirmed', 'cancelled')`);
        await queryRunner.query(`CREATE TABLE "scheduling"."scheduling" ("schedulingId" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" uuid NOT NULL, "status" "scheduling"."scheduling_status_enum" NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_b7e8862065f1df5aa8bae83a361" PRIMARY KEY ("schedulingId"))`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "scheduling"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "scheduling"."scheduling"`);
        await queryRunner.query(`DROP TYPE "scheduling"."scheduling_status_enum"`);
    }

}
