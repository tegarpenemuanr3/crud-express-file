//import express
const express = require("express");

// import router
const router = require("./routes/router.js");

// init express
const app = express();

// Use Router
app.use(router);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
