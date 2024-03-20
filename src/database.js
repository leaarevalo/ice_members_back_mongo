const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://LeaArevalo:LeaArevaloAdmin123@ice.mfhbvhp.mongodb.net/ice_members?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error connecting to database");
  });
