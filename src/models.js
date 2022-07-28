const mongoose = require("mongoose");
const shortid = require("shortid");
const ContentSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    text: { type: String },
    expiration: { type: Number }, //expiration in minutes
    shortenedUrl: {
      type: String,
      unque: true,
      trim: true,
      unique: true,
      index: true,
      default: shortid.generate,
    },
  },
  { timestamps: true }
);

ContentSchema.pre("save", () => {});
const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
