const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000; //Should be changed to local port
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(
  morgan("tiny"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false })
);

/* This will be for the production build*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

console.log("now listening in port... " + PORT);

app.listen(PORT);
