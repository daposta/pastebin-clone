const express = require("express");
const { getContent, createContent, fetchContent } = require("./controller");
const { body } = require("express-validator");
const router = express.Router();

router.get("/content", fetchContent);
router.post(
  "/content",

  body("text").not().isEmpty().trim().escape().withMessage("Text is required"),
  body("expiration")
    .not()
    .isEmpty()
    .withMessage("Expiration time in minutes is required"),

  createContent
);

router.get("/content/:shortId", getContent);

module.exports = router;
