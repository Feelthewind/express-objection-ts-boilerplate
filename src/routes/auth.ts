import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User";

const router = express.Router();

router.post("/join", async (req, res, next) => {
  const { email, nick, password, price } = req.body;
  try {
    const exUser = await User.query()
      .where({ email })
      .first();
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.redirect("/join");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.query().insert({
      email,
      nick,
      password: hash,
      price
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

export default router;
