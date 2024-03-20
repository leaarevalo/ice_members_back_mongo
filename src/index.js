const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./database");

const app = express();

const port = 3000;
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
