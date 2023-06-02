const axios = require('axios');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const userIpAddress = req.ip; // Retrieve the user's IP address from the request object
  const location = await getUserLocation(userIpAddress);
  
  if (location) {
    res.send(`User Location: ${location.city}, ${location.country}`);
  } else {
    res.send('Unable to retrieve user location.');
  }
});

async function getUserLocation(ipAddress) {
  try {
    const response = await axios.get(`https://api.ipgeolocationapi.com/geolocate/${ipAddress}`);
    const location = response.data;
    return {
      city: location.city,
      country: location.country_name
    };
  } catch (error) {
    console.log('Error retrieving user location:', error.message);
    return null;
  }
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
