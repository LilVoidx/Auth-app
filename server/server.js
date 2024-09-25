const express = require("express");
const app = express();
const { PORT } = require("./src/constants");

//initialize middleware
app.use(express.json());

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
