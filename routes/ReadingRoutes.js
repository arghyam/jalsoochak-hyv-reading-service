const express = require("express");
const router = express.Router();
const readingController = require("../controllers/readingController");

router.post("/createReading", readingController.createReading);

module.exports = router;
