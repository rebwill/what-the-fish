const express = require("express"); // require express
const app = express();
const fs = require("fs");

const seafood = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/seafood.json`)
);

// sets up a GET route that we will fetch from within the client side React app
app.get("/seafood", (req, res) => {
  // res.send({ data: "this is a string" });
  res.status(200).json({
    status: "success",
    seafood
  });
});

module.exports = app;
