const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const moment = require("moment");
const usersSchema = require("../models/users");

const createToken = (user) => {
  const payload = {
      userId: user._id,
      createdAt: moment().unix(),
      expiredAt: moment().add(1, "day").unix(),
  };
  console.log("KEY", process.env.TOKEN_KEY)
  return jwt.encode(payload, process.env.TOKEN_KEY);
};

router.post("/", async (req, res) => {
  console.log("req.body", req.body);
  const { username, password } = req.body;
  const user = await usersSchema.find({ username: username });
  if(user && user.length > 0) {
      let finalUser = user[0];
      console.log("user", user);
      const isPasswordCorrect = bcrypt.compareSync(password, finalUser.password);
      console.log("isPasswordCorrect", isPasswordCorrect);
      if(isPasswordCorrect) {
          res.json({ token: createToken(finalUser), done: "Login correct" },);
      } else {
          res.json({error: "Password incorrect", status: 404});
      }
  } else {
      res.json({ error: "User not found" }).status(400);
  }
});

router.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
  console.log(`-------> User Logged out`);
});

module.exports = router;
