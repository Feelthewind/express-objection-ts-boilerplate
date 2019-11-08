import { Model } from "objection";
import Knex from "knex";

import knexFile from "../../knexfile";

const environment = process.env.NODE_ENV || "development";
const knexConfig = (knexFile as any)[environment];

const knex = Knex(knexConfig);

const initDB = async () => {
  if (process.env.NODE_ENV !== "test") {
    await knex.migrate.latest();
    // knex.migrate.rollback({}, true);
  }
  Model.knex(knex);
  console.log("Initialized database");
};

export { initDB, knex };
