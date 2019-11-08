import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table
      .string("email", 40)
      .notNullable()
      .unique();
    table.string("nick", 15).notNullable();
    table.string("password", 100).nullable();
    table
      .integer("price")
      .notNullable()
      .defaultTo(0);
    table.bigInteger("createdAt").notNullable();
    table.bigInteger("updatedAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists("users");
}
