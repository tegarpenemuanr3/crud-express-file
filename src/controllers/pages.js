// Home page
const Home = (req, res) => {
  res.send("Welcome to Home Page");
};

// About Page
const About = (req, res) => {
  res.send("Welcome to About Page");
};

// Contact page
const Contact = (req, res) => {
  res.send("Welcome to Contact Page");
};

module.exports = {
  Home,
  About,
  Contact,
};
