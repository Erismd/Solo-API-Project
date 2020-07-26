import {MigrationInterface, QueryRunner} from "typeorm";

export class movies1595669148442 implements MigrationInterface {
    name = 'movies1595669148442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "director" character varying NOT NULL, "released_date" TIMESTAMP NOT NULL, "rating" integer NOT NULL, "country" character varying NOT NULL, "reviews" character varying NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
