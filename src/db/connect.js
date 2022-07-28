const mongoose = require("mongoose");
require("dotenv").config();

const startDB = () => {
  try {
    mongoose
      .connect(process.env.ATLAS_DB_URL, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connected");
      });
  } catch (e) {
    console.log(e);
  }
};

module.exports = startDB;
