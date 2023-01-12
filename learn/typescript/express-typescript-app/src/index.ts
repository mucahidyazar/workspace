import express = require("express");
import { router } from "./routes/loginRoutes";
const app = express();
import cookieSession from "cookie-session";

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie-session
app.use(cookieSession({ keys: ["cookie"] }));

app.use(router);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
