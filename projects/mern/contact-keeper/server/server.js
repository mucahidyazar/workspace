const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

//Connecting Database
connectDB();

//Initing Middleware //Body Verilerine Erismek
//Onceden bodyden gelen datalar icin bodyparse kullaniyorduk simdi bu express in icinde yuklu geliyor ve bununla body den gelen datalara erisebiliyoruz.
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log("Server started on port " + PORT));

app.get("/", (req, res) => res.send("Hello World"));

//Defining Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
