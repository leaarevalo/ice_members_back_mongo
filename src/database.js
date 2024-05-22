const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ice_members", {})
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error connecting to database");
  });
