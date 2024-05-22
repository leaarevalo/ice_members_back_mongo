const express = require("express");
const router = express.Router();
const memberSchema = require("../models/members");
const { checkToken } = require("../middleware");
router.use(checkToken);

router.get("/", async (req, res) => {
  const members = await memberSchema.find({});
  res.send(members);
});

router.post("/create", async (req, res) => {
  const newMember = new memberSchema({
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    dateOfBirth: req.body.dateOfBirth,
  });
  newMember.save();
  res.send(newMember);
});

router.post("/update", async (req, res) => {
  const { member } = req.body;
  const memberUpdated = await memberSchema.findOneAndUpdate(
    { _id: member._id },
    member,
    { returnNewDocument: true }
  );
  res.send(memberUpdated);
});

module.exports = router;
