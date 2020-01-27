const app = require("./app");

// const express = require("express"); // require express

// const app = express();

// sets the port our express server will be running on
const port = process.env.PORT || 5000;

// lets us know that the server is up and running
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
