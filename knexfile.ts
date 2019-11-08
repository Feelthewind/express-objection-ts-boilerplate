// Update with your config settings.

export default {
  test: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },

  development: {
    client: "postgresql",
    connection: {
      database: "node_auction",
      user: "postgres",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
