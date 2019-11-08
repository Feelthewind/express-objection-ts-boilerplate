import request from "supertest";

import { Express } from "express";

import initServer from "../src/server";
import User from "../src/models/User";
import { initDB, knex } from "../src/db/helpers";

describe("Routes: users", () => {
  let app: Express;

  beforeAll(async done => {
    await initDB();
    app = initServer();
    done();
  });

  beforeEach(() => {
    return knex.migrate.rollback().then(() => knex.migrate.latest());
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe("POST /auth/join", () => {
    test("Should insert single user", async () => {
      const user = {
        email: "test@test.com",
        nick: "tester",
        password: "password",
        price: 10000
      };

      await request(app)
        .post("/auth/join")
        .send(user);
      const users = await User.query();

      expect(users.length).toBe(1);
      expect(users[0].email).toBe(user.email);
    });
  });
});
