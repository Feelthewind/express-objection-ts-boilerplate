import knex from "knex";

import knexFile from "../knexfile";

const environment = process.env.NODE_ENV || "development";
const knexConfig = (knexFile as any)[environment];
const connection = knex(knexConfig);

export default connection;
