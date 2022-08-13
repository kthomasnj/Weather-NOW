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
            // weatherUv1El.textContent = "UV Index: " + data.list[0].weather[0].id

            // Five-Day Forecast
            //Day 1

            var day1DateEl = document.querySelector("#day-1 h2");
            var day1IconEl = document.querySelector("#day-1 div i");
            var day1TempEl = document.querySelector("#one-temp");
            var day1WindEl = document.querySelector("#one-wind");
            var day1HumidEl = document.querySelector("#one-humid");

            day1DateEl.textContent = data.list[0].dt_txt;
            day1IconEl.textContent = "icon: " + data.list[0].weather[0].icon;
            day1TempEl.textContent = "Temperture: " + data.list[0].main.temp;
            day1WindEl.textContent = "Wind: " + data.list[0].wind.speed;
            day1HumidEl.textContent = "Humidity: " + data.list[0].main.humidity;

            //Day 2

            var day1DateEl = document.querySelector("#day-2 h2");
            var day1IconEl = document.querySelector("#day-2 div i");
            var day1TempEl = document.querySelector("#two-temp");
            var day1WindEl = document.querySelector("#two-wind");
            var day1HumidEl = document.querySelector("#two-humid");

            day1DateEl.textContent = data.list[9].dt_txt;
            day1IconEl.textContent = "icon: " + data.list[9].weather[0].icon;
            day1TempEl.textContent = "Temperture: " + data.list[9].main.temp;
            day1WindEl.textContent = "Wind: " + data.list[9].wind.speed;
            day1HumidEl.textContent = "Humidity: " + data.list[9].main.humidity;

            //Day 3

            var day1DateEl = document.querySelector("#day-3 h2");
            var day1IconEl = document.querySelector("#day-3 div i");
            var day1TempEl = document.querySelector("#three-temp");
            var day1WindEl = document.querySelector("#three-wind");
            var day1HumidEl = document.querySelector("#three-humid");

            day1DateEl.textContent = data.list[18].dt_txt;
            day1IconEl.textContent = "icon: " + data.list[18].weather[0].icon;
            day1TempEl.textContent = "Temperture: " + data.list[18].main.temp;
            day1WindEl.textContent = "Wind: " + data.list[18].wind.speed;
            day1HumidEl.textContent = "Humidity: " + data.list[18].main.humidity;

            //Day 4

            var day1DateEl = document.querySelector("#day-4 h2");
            var day1IconEl = document.querySelector("#day-4 div i");
            var day1TempEl = document.querySelector("#four-temp");
            var day1WindEl = document.querySelector("#four-wind");
            var day1HumidEl = document.querySelector("#four-humid");

            day1DateEl.textContent = data.list[27].dt_txt;
            day1IconEl.textContent = "icon: " + data.list[27].weather[0].icon;
            day1TempEl.textContent = "Temperture: " + data.list[27].main.temp;
            day1WindEl.textContent = "Wind: " + data.list[27].wind.speed;
            day1HumidEl.textContent = "Humidity: " + data.list[27].main.humidity;

            //Day 5

            var day1DateEl = document.querySelector("#day-5 h2");
            var day1IconEl = document.querySelector("#day-5 div i");
            var day1TempEl = document.querySelector("#five-temp");
            var day1WindEl = document.querySelector("#five-wind");
            var day1HumidEl = document.querySelector("#five-humid");

            day1DateEl.textContent = data.list[36].dt_txt;
            day1IconEl.textContent = "icon: " + data.list[36].weather[0].icon;
            day1TempEl.textContent = "Temperture: " + data.list[36].main.temp;
            day1WindEl.textContent = "Wind: " + data.list[36].wind.speed;
            day1HumidEl.textContent = "Humidity: " + data.list[36].main.humidity;
        });

});

timeEl.textContent = currentTime;