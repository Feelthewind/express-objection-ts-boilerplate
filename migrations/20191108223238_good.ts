import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("goods", table => {
    table.increments("id").primary();
    table.string("name", 40).notNullable();
    table.string("img", 200).nullable();
    table
      .integer("price")
      .notNullable()
      .defaultTo(0);
    table.bigInteger("createdAt").notNullable();
    table.bigInteger("updatedAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists("goods");
}
