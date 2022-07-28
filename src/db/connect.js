const mongoose = require("mongoose");
require("dotenv").config();

const startDB = () => {
  mongoose
    .connect(process.env.ATLAS_DB_URL, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connected");
    });
};

module.exports = startDB;
