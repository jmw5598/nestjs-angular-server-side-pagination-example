import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigrationForUsersEntity1602867906847 implements MigrationInterface {
  name = 'InitialMigrationForUsersEntity1602867906847'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "email" varchar NOT NULL)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
