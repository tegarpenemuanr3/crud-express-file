//import express
import express from "express";

// import router
import router from "./routes/router.js";

// init express
const app = express();

// Use Router
app.use(router);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
