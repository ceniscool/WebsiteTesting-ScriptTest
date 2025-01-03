const currentWeather = document.getElementById('current-weather');

// Simulated weather data
const weatherData = [
  "Sunny, 85°F",
  "Cloudy, 70°F",
  "Rain Showers, 65°F",
  "Thunderstorms, 60°F",
  "Clear Night, 72°F"
];

let index = 0;

function updateWeather() {
  currentWeather.textContent = `Forecast: ${weatherData[index]}`;
  index = (index + 1) % weatherData.length;
}

// Update every 3 seconds
updateWeather();
setInterval(updateWeather, 3000);
