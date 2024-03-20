const express = require("express");
const router = express.Router();
const memberSchema = require("../models/members");

router.get("/", async (req, res) => {
  const members = await memberSchema.find({});
  console.log("members", members);
  res.send(members);
});

router.post("/create", async (req, res) => {
  console.log("req.body", await req.body);
  const newMember = new memberSchema({
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    dateOfBirth: req.body.dateOfBirth,
  });
  newMember.save();
  res.send(newMember);
});

module.exports = router;
