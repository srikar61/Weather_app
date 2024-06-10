const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index1.html");
});

// Handle the POST request with the user's coordinates
app.post("/location", function(req, res) {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  // Use a geolocation service or database to get the location information based on the coordinates
  // Here, you would implement the logic to retrieve the location using the latitude and longitude

  // Return the location information as a response
  const location = {
    city: "Example City",
    country: "Example Country"
  };
  res.json(location);
});

// Start the server
app.listen(1000, function() {
  console.log("Server is listening on port 1000");
});
