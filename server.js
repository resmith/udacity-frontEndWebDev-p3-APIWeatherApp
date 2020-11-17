// Initialize data
projectData = {};

// Require packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(logger("dev"));

// Initialize the main project folder
app.use(express.static("website"));

// // Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// *** Setup routes
// GET route
app.get("/weather", sendData);
function sendData(request, response) {
  console.log("sendData projectData: ", projectData);
  response.send(projectData);
}

// POST route
app.post("/new", addWeather);
function addWeather(req, res) {
  console.log("addWeather req.body: ", req.body);
  const { date, temp, feelingToday } = req.body;
  projectData = {
    date,
    temp,
    feelingToday,
  };
  console.log("addWeather projectData: ", projectData);
  res.send(projectData);
}
