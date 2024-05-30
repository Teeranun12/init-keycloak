import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1717039755058 implements MigrationInterface {
    name = 'Test1717039755058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "phone" TO "role"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "role" TO "phone"`);
    }

}
