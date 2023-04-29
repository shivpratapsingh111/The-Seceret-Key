const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("images"));
// Use the body-parser middleware to extract the request body
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const result = req.query.result;
  res.render("index", { result });
});

app.post("/", (req, res) => {
  const userInput = req.body.textInput;
  const secureString = process.env.SECURE_STRING;

  if (userInput === secureString) {
    // Strings match
    res.redirect("/?result=true");
  } else {
    // Strings don't match
    res.redirect("/?result=false");
  }
});

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000/");
});
