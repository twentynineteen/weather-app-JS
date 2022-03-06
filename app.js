// Init LS
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
console.log(weather);

// init UI
const ui = new UI();

//get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  //Change location
  weather.changeLocation(city, country);

  //set location in LS
  storage.setLocationData(city, country);

  //Get and Display Weather
  getWeather();

  //Close Modal
  $("#locModal").modal("hide");

  // updateHeader();
});

//call get weather
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
      updateHeader();
    })
    .catch((err) => console.log(err));
  // updateHeader();
}

// //update page header
// updateHeader();

function updateHeader() {
  //update location on page
  document.getElementById("w-location").innerHTML = `${weather.city}`;
}
