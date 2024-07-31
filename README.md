# Weather App

## Description

This is a simple weather application built with HTML, CSS, and JavaScript. It fetches weather data from the OpenWeatherMap API and displays the current weather conditions for a given city. Additionally, it supports fetching weather information based on the user's current location using the Geolocation API.

## Features

- Search for weather by city name.
- Display current temperature, humidity, wind speed, and visibility.
- Show weather icons based on weather conditions.
- Automatically detect and display weather for the user's current location.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Logic to fetch and display weather data.
- **OpenWeatherMap API**: Fetching real-time weather data.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
2. Open the index.html file in a browser.

User Action                             Application State
-----------                             -----------------
1. Page Load                            -> Display loading screen
                                          -> Get current location

2. Click "Get Location" button          -> Fetch location data
                                          -> Fetch weather data based on location
                                          -> Display weather data

3. Enter city name and click "Search"   -> Fetch weather data for entered city
                                          -> Display weather data

4. Error in fetching weather data       -> Display error message

graph TD
    A[Page Load] --> B{Get Location}
    B --> |Success| C[Fetch Weather Data]
    B --> |Error| E[Display Error Message]
    C --> D[Display Weather Data]



