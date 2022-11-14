import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1668346491583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "coffees" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "coffees" RENAME COLUMN "title" TO "name"`,
    );
  }
}
