// import { Express } from "express"; //ES6 module Syntak
// "type": "module" // di packeage.json atas script
const Express = require("express"); // import express
const Router = require("./routes/router"); // import router
// init express
const app = Express();
app.use(Router);

//listen on port
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
