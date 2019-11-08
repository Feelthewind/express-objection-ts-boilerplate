import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import { Model } from "objection";
import Knex from "knex";
require("dotenv").config();

import path from "path";

import knexConfig from "../knexfile";

const knex = Knex(knexConfig.development);
knex.migrate.latest();
// knex.migrate.rollback({}, true);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("port", process.env.PORT || 8010);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(flash());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    // errorHandler(err, res);
  } else {
    next();
  }
});

app.listen(app.get("port"), () => {
  console.log("Auction app listening at port %s", app.get("port"));
});
