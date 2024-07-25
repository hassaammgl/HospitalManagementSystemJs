"use server"

import mongoose from "mongoose";

const mongo_uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DATABASE_NAME;

const connectDatabase = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(mongo_uri, { dbName })
      .then((mongoose) => {
        resolve(mongoose);
        console.log("connected to Mongoose");
      })
      .catch((err) => {
        console.log("error connecting to Mongoose");
        reject(err);
      });
  });
};

export default connectDatabase;
