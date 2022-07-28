const cron = require("node-cron");

const { runProcess } = require("./src/utils");
const app = require("./app");
const startDB = require("./src/db/connect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
startDB();
// Connect to MongoDB database

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
cron.schedule("* * * * *", async () => {
  runProcess();
});
