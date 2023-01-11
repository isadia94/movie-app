const mongoose = require("mongoose");

const dbConnect = () => {
  const connectionParams = {
    useNewUrlParser: true,
  };
  mongoose.connect(process.env.MONGO_DB_URI, connectionParams);

  mongoose.connection.on("connected", () => {
    console.log("Connected to Mongo success....");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error while connecting to database" + err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongo Disconnected");
  });
};

module.exports = dbConnect;
