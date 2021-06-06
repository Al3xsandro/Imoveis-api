import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProperty1623010439509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "properties",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "cep",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar"
                    },
                    {
                        name: "complement",
                        type: "varchar"
                    },
                    {
                        name: "value",
                        type: "varchar"
                    },
                    {
                        name: "bedrooms",
                        type: "varchar"
                    },
                    {
                        name: "avaliable",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_property",
                        referencedTableName: "Users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("properties")
    }
}