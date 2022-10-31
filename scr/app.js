function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "5bf3o6fa2c1bf4550542f2d00ata3a0c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
