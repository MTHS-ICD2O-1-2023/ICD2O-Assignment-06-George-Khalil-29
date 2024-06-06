// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict" 

// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const apiKey = 'fe1d80e1e103cff8c6afd190cad23fa5'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const lat = 45.4211435;
    const lon = -75.6900574;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
        document.getElementById('weather-description').innerText = `Description: ${description}`;
        document.getElementById('weather-icon').src = iconUrl;

    } catch (error) {
        console.error('catch', error);
    }
}

// Initial call to fetch weather data when the page loads
getWeather();