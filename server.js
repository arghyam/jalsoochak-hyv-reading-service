require("dotenv").config();
const app = require("./app");
const { connectDB, sequelize } = require("./config/db");

const PORT = process.env.PORT || 7000;

const startServer = async () => {
//   await connectDB();
  //   await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Reading service is running on port ${PORT}`);
  });
};

startServer();
