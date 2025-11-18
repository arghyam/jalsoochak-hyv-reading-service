const readingService = require("../services/readingService");

const createReading = async (req, res, next) => {
  try {
    console.log("request ", req.body);
    const reading = await readingService.createReading(req.body);
    res.status(201).json(reading);
  } catch (err) {
    next(err);
  }
};

module.exports = { createReading };
