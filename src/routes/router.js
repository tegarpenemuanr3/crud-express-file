// import express
const express = require("express");

// import page controller
const { Home, About, Contact } = require("../controllers/pages.js");

// init express router
const router = express.Router();

// Home route
router.get("/", Home);

// About route
router.get("/about", About);

// Contact route
router.get("/contact", Contact);

// export default router
module.exports = router;
