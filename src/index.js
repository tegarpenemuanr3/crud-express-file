//import express
const express = require("express");

// import router
const router = require("./routes/router.js");

// init express
const app = express();

// * Swagger
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("../src/swagger/apidocs.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

// Use Router
app.use(router);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
