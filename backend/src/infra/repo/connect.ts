import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/videos");

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Connection Successful!");
});
