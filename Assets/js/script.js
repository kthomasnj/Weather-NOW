var ApiKey = "92a37c33dfa01af74edbf2b53382cef6";
var submitBtn = document.querySelector('#submit-button');
var cityMain = document.querySelector('#city-main');
var timeEl = document.querySelector('#current-date');
var currentTime = moment().format('L');
var cityLatEl = document.querySelector('#city-lat');
var cityLatVal = document.querySelector('#city-lat').value;
var cityLatAttr = cityLatEl.getAttribute("lat");
var cityLonEl = document.querySelector('#city-lon');
var cityLonVal = document.querySelector('#city-lon').value;
var cityLonAttr = cityLonEl.getAttribute("lon");
var currentWeatherApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${cityLatVal}&lon=${cityLonVal}&appid=${ApiKey}`;


submitBtn.addEventListener('click', function () {
    var city = document.querySelector('#city').value;
    var cityLat = document.querySelector('#city-lat');
    var cityLon = document.querySelector('#city-lon');
    var cityAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + ApiKey;    

    fetch(cityAPI)
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            cityMain.textContent = data[0].name + ", " + data[0].state;
            cityLat.setAttribute("value", data[0].lat);
            cityLat.setAttribute("lat", data[0].lat);
            cityLon.setAttribute("value", data[0].lon);
            cityLon.setAttribute("lon", data[0].lon);
            var cityLatEl = document.querySelector('#city-lat');
            var cityLonEl = document.querySelector('#city-lon');
            var cityLatAttr = cityLatEl.getAttribute("lat");
            var cityLonAttr = cityLonEl.getAttribute("lon");
            var currentWeatherApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${cityLatAttr}&lon=${cityLonAttr}&appid=${ApiKey}`;

            return fetch(currentWeatherApi);
        })
           .then(function (response) {
           return response.json();
        }).then(function (data) {
            console.log(data.list[0]);
            var weatherCond1El = document.querySelector("#weather-cond");
            var weatherTemp1El = document.querySelector("#city-temp");
            var weatherWind1El = document.querySelector("#city-wind");
            var weatherHum1El = document.querySelector("#city-humidity");
            var weatherUv1El = document.querySelector("#city-uv");

            // Curent Day

            weatherCond1El.textContent = "Weather Conditions: " + data.list[0].weather[0].description;
            weatherTemp1El.textContent = "Temperture: " + data.list[0].main.temp;
            weatherWind1El.textContent = "Wind: " + data.list[0].wind.speed;
            weatherHum1El.textContent = "Humidity: " + data.list[0].main.humidity;
            weatherUv1El.textContent = "UV Index: " + data.list[0].weather[0].description;

            // Five-Day Forecast
            //Day 1

            weatherCond1El.textContent = "Weather Conditions: " + data.list[0].weather[0].description;
            weatherTemp1El.textContent = "Temperture: " + data.list[0].main.temp;
            weatherWind1El.textContent = "Wind: " + data.list[0].wind.speed;
            weatherHum1El.textContent = "Humidity: " + data.list[0].main.humidity;
            weatherUv1El.textContent = "UV Index: " + data.list[0].weather[0].description;

        });

});

timeEl.textContent = currentTime;

// function fetchWeather() {


//     console.log(cityLonAttr);

//     fetch(currentWeatherApi)
        
// }

// fetch('api/foo?get_max=True')
// .then( response => response.json())
// .then( response => {
//     var max = response["max"];
//     return fetch('api2/bar?max=' + max)
// })
// .then( response => response.json())
// .then( mydata => processdata(mydata))