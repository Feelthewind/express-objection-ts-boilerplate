import { Model } from "objection";
import Knex from "knex";

import knexConfig from "../../knexfile";

const initDB = async () => {
  const knex = Knex(knexConfig.development);
  if (process.env.NODE_ENV !== "test") {
    await knex.migrate.latest();
    // knex.migrate.rollback({}, true);
  }
  Model.knex(knex);
};

export default initDB;
