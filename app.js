// Developer: Roderick Bernardo
// Purpose: Sample app for the Jenkins lab

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Jenkins sample node app" });
});

module.exports = app;
