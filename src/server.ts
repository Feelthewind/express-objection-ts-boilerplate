import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
require("dotenv").config();

import path from "path";

import authRouter from "./routes/auth";

const initServer = () => {
  const app = express();

  const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET as string,
    cookie: {
      httpOnly: true,
      secure: false
    }
  });

  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.set("port", process.env.PORT || 8010);

  app.use(morgan("dev"));
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/img", express.static(path.join(__dirname, "uploads")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(sessionMiddleware);
  app.use(flash());

  app.use("/auth", authRouter);

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
};

export default initServer;
