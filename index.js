// Import packages
const express = require("express");
const home = require("./routes/home");
const path = require("path");
// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);
app.set("view engine", "ejs");
//Defino la localización de mis vistas
app.set("views", path.join(__dirname, "views"));

// connection
const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening to port ${port}`));
