class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.city;
    this.desc.textContent = weather.conditions;
    this.string.textContent = weather.temp;
    this.icon.setAttribute(
      "src",
      `WeatherIcons-main/SVG/1st-Set-Color/${weather.icon}.svg`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.dew}`;
    this.wind.textContent = `Wind Speed: ${weather.windspeed}`;
    //update location on page
    document.getElementById("w-location").innerHTML = `${weatherLocation.city}`;
  }
}
