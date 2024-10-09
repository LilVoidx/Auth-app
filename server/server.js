const express = require("express");
const app = express();
const passport = require("passport");
const { PORT, CLIENT_URL } = require("./src/constants");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Ensure passport is required and initialized
require("./src/middlewares/auth.middleware");

//initialize middleware
app.use(express.json());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(passport.initialize());

//import routes
const authRoutes = require("./src/routes/auth.route");

//initialize routes
app.use("/api", authRoutes);

//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
