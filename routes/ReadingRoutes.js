const express = require("express");
const router = express.Router();
const readingController = require("../controllers/readingController");

router.post("/create", readingController.createReading);

module.exports = router;
