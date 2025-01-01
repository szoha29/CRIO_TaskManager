const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const config = require("../backend/config/config");

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB", err));

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
