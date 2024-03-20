const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require("./database");

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
