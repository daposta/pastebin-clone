const Content = require("./models");
const { body, validationResult } = require("express-validator");
const shortid = require("shortid");

const createContent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const data = req.body;

  const content = await Content.create(data);

  res.status(201).json({ message: "Content saved", url: content.shortUrl });
};

const getContent = async (req, res) => {
  const { shortUrl } = req.params;
  // if (!shortid.isValid(shortUrl)) {
  //   return res.status(400).json({ message: "Invalid ID sent", data: {} });
  // }
  const content = await Content.findOne({ shortUrl: shortUrl });
  if (!content) {
    return res.status(400).json({ message: "Content not found", data: {} });
  }
  res.status(200).json({ message: "Content Found", data: content });
};

const fetchContent = async (req, res) => {
  const content = await Content.find();
  res.status(200).json({ message: "Content Found", data: content });
};

module.exports = { createContent, getContent, fetchContent };
