const express = require("express");
const loginRoutes = require("./login");
const membersRoutes = require("./members");
const registerUserRoutes = require("./register");
const router = express.Router();

router.use("/login", loginRoutes);
router.use("/members", membersRoutes);
router.use("/register", registerUserRoutes);


module.exports = router;
