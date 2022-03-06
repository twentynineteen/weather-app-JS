class Weather {
  constructor(city, country) {
    this.apiKey = "KYE73WXNXWBD3EQ9Z73SLYUG4";
    this.city = city;
    this.country = country;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city},${this.country}?key=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData.currentConditions;
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
