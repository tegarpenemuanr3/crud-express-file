// import express
const express = require("express");

// init express router
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// About route
router.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

// Contact route
router.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

// export default router
// export default router; //opsi 2
module.exports = router;
