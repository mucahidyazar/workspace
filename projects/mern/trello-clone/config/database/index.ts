import mongoose from "mongoose";

mongoose.connect(
  "mongodb://127.0.0.1:27017/nextjs-with-typescript-mongodb",
  {
    useNewUrlParser: true,
    useCreateIndex: true, //MongoDB ile calisirken index'imizin yaratildigindan emin oluyor ve hizlica istedigimiz dataya erismemizi sagliyor.
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to the database");
  }
);
