const API_KEY = "2c7d32baa12c6b38b928c3f1ffd6295c";
const weather = document.querySelector('.jsWeather');

function getWeather(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  ).then((response)=>{
      return response.json()
  }).then((json)=>{
    console.log(json);
      const temp = json.main.temp;
      const place = json.name;

      weather.innerText = `${Math.floor((temp -273.15)*100)/100}°C @ ${place}`
  })
}

function handleSuccess(geolocation) {
  const { latitude, longitude } = geolocation.coords;
  const coordinateObject = {
    latitude,
    longitude,
  };

  localStorage.setItem("geolocation", JSON.stringify(coordinateObject));
  getWeather(latitude, longitude);
}

function handleError() {
  console.log("Can't Access Geolocation");
}

function askForCoordinates() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function loadCoordinates() {
  const loadedCoordinates = localStorage.getItem("coordinates");
  if (loadedCoordinates) {
    const { latitude, longitude } = JSON.parse(loadedCoordinates);
    getWeather(latitude, longitude);
  } else {
    askForCoordinates();
  }
}

function init() {
  loadCoordinates();
}
init();
