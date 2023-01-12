"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express();
var cookie_session_1 = __importDefault(require("cookie-session"));
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie-session
app.use(cookie_session_1.default({ keys: ["cookie"] }));
app.use(loginRoutes_1.router);
app.listen(5000, function () {
    console.log("Listening on port 5000");
});
