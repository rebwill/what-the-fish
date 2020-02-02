const express = require("express"); // require express
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static(path.join(__dirname, "/client/build")));

const seafood = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/seafood.json`)
);

// sets up a GET route that we will fetch from within the client side React app
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    seafood
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
