
const express = require("express");
const app = express();
const path = require("path");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
//Route Imports
const product = require("./routes/productRoute");
const venue = require("./routes/venueRoute")

app.use("/api/z1",product);
app.use("/aak/p3",venue);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app