const express = require("express");
const router = express.Router();
const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const moment = require("moment");

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const passwordHashed = bcrypt.hashSync(password, 10);
    const newUser = new usersSchema({
        username,
        password: passwordHashed,
    });
    newUser.save();
    res.send(newUser);
});


module.exports = router;