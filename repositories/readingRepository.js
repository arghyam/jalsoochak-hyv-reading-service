const { Reading } = require("../models/readingModel");

const create = async (reading) => {
  return Reading.create(reading);
};

module.exports = { create };
