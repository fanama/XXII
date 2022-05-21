import mongoose from "mongoose";

export const connect = async () => {
  const defaultUri: string = "mongodb://localhost/videos";

  mongoose.connect(process.env.MONGO_URI || defaultUri, {});
};

export const close = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
};
