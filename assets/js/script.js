var ApiKey = "";
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
var currentWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLatVal}&lon=${cityLonVal}&units=imperial&appid=${ApiKey}`;


submitBtn.addEventListener('click', function () {
    var city = document.querySelector('#city').value;
    var cityLat = document.querySelector('#city-lat');
    var cityLon = document.querySelector('#city-lon');
    var cityAPI = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + ApiKey;

    //Save to favorites

    var recentSearches = document.querySelector('#searches');
    var citySearchEl = document.createElement('li');

    recentSearches.appendChild(citySearchEl);
    citySearchEl.setAttribute('class', 'btn btn-primary m-1');
    citySearchEl.setAttribute('city', city);
    citySearchEl.textContent = city;


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
            var currentWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLatAttr}&lon=${cityLonAttr}&units=imperial&appid=${ApiKey}`;

            return fetch(currentWeatherApi);
        })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var weatherCond1El = document.querySelector("#weather-cond");
            var weatherTemp1El = document.querySelector("#city-temp");
            var weatherWind1El = document.querySelector("#city-wind");
            var weatherHum1El = document.querySelector("#city-humidity");

            // Curent Day

            weatherCond1El.textContent = "Weather Conditions: " + data.list[0].weather[0].description;
            weatherTemp1El.textContent = "Temperture: " + data.list[0].main.temp + String.fromCharCode(176) + "F";
            weatherWind1El.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            weatherHum1El.textContent = "Humidity: " + data.list[0].main.humidity + " %";
            // weatherUv1El.textContent = "UV Index: " + data.list[0].weather[0].id

            // Five-Day Forecast
            //Day 1

            var day1DateEl = document.querySelector("#day-1 h2");
            var day1IconEl = document.querySelector("#day-1 div img");
            var day1TempEl = document.querySelector("#one-temp");
            var day1WindEl = document.querySelector("#one-wind");
            var day1HumidEl = document.querySelector("#one-humid");
            var day1Day = data.list[0].dt_txt;
            var day1Conv = moment(day1Day).format("dddd");
            var day1Icon = day1IconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";

            day1IconEl.setAttribute("src", day1Icon);
            day1DateEl.textContent = day1Conv;
            day1TempEl.textContent = "Temperture: " + data.list[0].main.temp + String.fromCharCode(176) + "F";
            day1WindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
            day1HumidEl.textContent = "Humidity: " + data.list[0].main.humidity + " %";

            //Day 2

            var day1DateEl = document.querySelector("#day-2 h2");
            var day2IconEl = document.querySelector("#day-2 div img");
            var day1TempEl = document.querySelector("#two-temp");
            var day1WindEl = document.querySelector("#two-wind");
            var day1HumidEl = document.querySelector("#two-humid");
            var day2Day = data.list[9].dt_txt;
            var day2Conv = moment(day2Day).format("dddd");
            var day2Icon = day2IconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[9].weather[0].icon + "@2x.png";

            day2IconEl.setAttribute("src", day2Icon);
            day1DateEl.textContent = day2Conv;
            day1TempEl.textContent = "Temperture: " + data.list[9].main.temp + String.fromCharCode(176) + "F";
            day1WindEl.textContent = "Wind: " + data.list[9].wind.speed + " MPH";
            day1HumidEl.textContent = "Humidity: " + data.list[9].main.humidity + " %";

            //Day 3

            var day1DateEl = document.querySelector("#day-3 h2");
            var day1IconEl = document.querySelector("#day-3 div img");
            var day1TempEl = document.querySelector("#three-temp");
            var day1WindEl = document.querySelector("#three-wind");
            var day1HumidEl = document.querySelector("#three-humid");
            var day3Day = data.list[18].dt_txt;
            var day3Conv = moment(day3Day).format("dddd");
            var day3Icon = day1IconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[18].weather[0].icon + "@2x.png";

            day1IconEl.setAttribute("src", day3Icon);
            day1DateEl.textContent = day3Conv;
            day1TempEl.textContent = "Temperture: " + data.list[18].main.temp + String.fromCharCode(176) + "F";
            day1WindEl.textContent = "Wind: " + data.list[18].wind.speed + " MPH";
            day1HumidEl.textContent = "Humidity: " + data.list[18].main.humidity + " %";

            //Day 4

            var day1DateEl = document.querySelector("#day-4 h2");
            var day1IconEl = document.querySelector("#day-4 div img");
            var day1TempEl = document.querySelector("#four-temp");
            var day1WindEl = document.querySelector("#four-wind");
            var day1HumidEl = document.querySelector("#four-humid");
            var day4Day = data.list[27].dt_txt;
            var day4Conv = moment(day4Day).format("dddd");
            var day4Icon = day1IconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + "@2x.png";

            day1IconEl.setAttribute("src", day4Icon);
            day1DateEl.textContent = day4Conv;
            day1TempEl.textContent = "Temperture: " + data.list[27].main.temp + String.fromCharCode(176) + "F";
            day1WindEl.textContent = "Wind: " + data.list[27].wind.speed + " MPH";
            day1HumidEl.textContent = "Humidity: " + data.list[27].main.humidity + " %";

            //Day 5

            var day1DateEl = document.querySelector("#day-5 h2");
            var day1IconEl = document.querySelector("#day-5 div img");
            var day1TempEl = document.querySelector("#five-temp");
            var day1WindEl = document.querySelector("#five-wind");
            var day1HumidEl = document.querySelector("#five-humid");
            var day5Day = data.list[36].dt_txt;
            var day5Conv = moment(day5Day).format("dddd");
            var day5Icon = day1IconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[36].weather[0].icon + "@2x.png";

            day1IconEl.setAttribute("src", day5Icon);
            day1DateEl.textContent = day5Conv;
            day1TempEl.textContent = "Temperture: " + data.list[36].main.temp + String.fromCharCode(176) + "F";
            day1WindEl.textContent = "Wind: " + data.list[36].wind.speed + " MPH";
            day1HumidEl.textContent = "Humidity: " + data.list[36].main.humidity + " %";

            // Write City Weather Icon

            var cityIconEl = document.querySelector('#city-info img');
            var cityIcon = cityIconEl.textContent = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";

            cityIconEl.setAttribute("src", cityIcon);

            var cityLatEl = document.querySelector('#city-lat');
            var cityLonEl = document.querySelector('#city-lon');
            var cityLatAttr = cityLatEl.getAttribute("lat");
            var cityLonAttr = cityLonEl.getAttribute("lon");
            var uvIndexApi = `https://api.openweathermap.org/data/2.5/uvi?lat=${cityLatAttr}&lon=${cityLonAttr}&appid=${ApiKey}`;

            return fetch(uvIndexApi);
        })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var uv = data.value;
            var uvColorEl = document.querySelector('#uv-color');
  
            uvColorEl.textContent = uv;

            if (uv > 11) {
                uvColorEl.setAttribute('class', 'violet');
            } else if (uv > 8 && uv < 11) {
                uvColorEl.setAttribute('class', 'red');
            } else if (uv > 6 && uv < 8 + uv) {
                uvColorEl.setAttribute('class', 'orange');
            } else if (uv > 3 && uv < 6 + uv) {
                uvColorEl.setAttribute('class', 'yellow');
            } else {
                uvColorEl.setAttribute('class', 'green');
            }            
        })
});

timeEl.textContent = currentTime;