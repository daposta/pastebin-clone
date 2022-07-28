const cron = require("node-cron");
const mongoose = require("mongoose");

const { runProcess } = require("./src/utils");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose
  .connect(process.env.ATLAS_DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
  });

cron.schedule("* * * * *", async () => {
  runProcess();
});
