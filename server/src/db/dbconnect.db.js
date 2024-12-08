import mongoose from "mongoose";

const connectdb = async () => {
  try {
    if (process.env.Host == "localhost") {
      const mongoDBInstance = await mongoose.connect(
        `${process.env.MongoDB_URI}/${process.env.DB_NAME}`
      );
    } else {
      console.log("else runn");

      const mongoDBInstance = await mongoose.connect(
        `${process.env.MongoDB_URI_Full}`
      );
    }

    console.log("🚀MongoDB connected successfully !!!");
  } catch (err) {
    console.error("Mongodb connection failed!!!", err);
    process.exit(1);
  }
};

export default connectdb;
