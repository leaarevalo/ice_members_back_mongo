const express = require("express");
const usersRoutes = require("./users");
const router = express.Router();

router.use("/members", usersRoutes);

module.exports = router;
