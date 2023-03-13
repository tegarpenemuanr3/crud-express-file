// import express
// import { Express } from "express"; //ES6 module Syntak
// "type": "module" // di packeage.json atas script
const Express = require("express");

// init express
const app = Express();

//basic routes
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//listen on port
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
