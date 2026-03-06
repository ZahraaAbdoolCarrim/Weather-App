let longitude, latitude;

navigator.geolocation.getCurrentPosition(

  function(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.longitude;
    fetchWeatherByCoords();
  },
  function(error) {
    console.error("Error getting geolocation: ", error);
  }

);

export async function fetchWeatherByCoords() {
  // const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=672f61843ac0d6c9319f8f381d617cd9&units=metric`;
  const city = "Mile End";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=672f61843ac0d6c9319f8f381d617cd9`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Weather data not found.");
    const data = await response.json();
    console.log(data);
  }
  catch(error) {
    console.log(error.message);
  }

}