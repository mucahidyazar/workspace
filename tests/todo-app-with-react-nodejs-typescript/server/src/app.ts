import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRouter from "./routers";

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(todoRouter);

const uri: string = `mongodb://127.0.0.1:27017/todo-app-with-react-nodejs-typscript`;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
