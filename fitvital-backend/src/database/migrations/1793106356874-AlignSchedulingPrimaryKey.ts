import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlignSchedulingPrimaryKey1793106356874 implements MigrationInterface {
  name = 'AlignSchedulingPrimaryKey1793106356874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "scheduling"."scheduling" ALTER COLUMN "schedulingId" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "scheduling"."scheduling" ALTER COLUMN "schedulingId" SET DEFAULT uuid_generate_v4()`,
    );
  }
}
