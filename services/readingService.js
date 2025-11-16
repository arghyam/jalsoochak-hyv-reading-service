const readingRepo = require("../repositories/readingRepository");

const createReading = async (data) => {
  console.log("Reading service called");
  //so my plan is for the service to speak to the repo directly for any db interaction .
  // readingRepo.create(data);
};

module.exports = { createReading };
