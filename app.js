const express = require("express");
const app = express();
const readingRoutes = require("./routes/ReadingRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use("/readings", readingRoutes);
app.use(errorHandler);

module.exports = app;
