const express = require("express");
const cron = require("node-cron");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const { runProcess } = require("./src/utils");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api", routes);

app.use("/", (req, res) => {
  res.status(200).send(`App is working`);
});

// Connect to MongoDB database
mongoose
  .connect(process.env.ATLAS_DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
  });

cron.schedule("* * * * *", async () => {
  runProcess();

  //get time of creation
  //get current time
  //if the diffence it greater than expiration, the delete
});
