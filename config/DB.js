const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database conected");
  } catch (error) {
    console.log(`DB can not be connect ${error}`);
  }
};
