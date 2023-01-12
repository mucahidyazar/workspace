const express = require("express");
const cors = require("cors");
require("../configs/db");

//ROUTERS
const userRouter = require("../routers/user");
const quizRouter = require("../routers/quiz");
const adminRouter = require("../routers/admin");
const scoreboardRouter = require("../routers/scoreboard");

const app = express();

app.use(cors());
app.use(express.json());
app.use(adminRouter);
app.use(userRouter);
app.use(quizRouter);
app.use(scoreboardRouter);

module.exports = app;
