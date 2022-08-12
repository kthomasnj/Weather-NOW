var ApiKey = "92a37c33dfa01af74edbf2b53382cef6";
var submitBtn = document.querySelector('#submit-button');
var cityMain = document.querySelector('#city-main');
var timeEl = document.querySelector('#current-date');
var currentTime = moment().format("dddd, MMMM Do");


submitBtn.addEventListener('click', function () {
    var city = document.querySelector('#city').value;
    var cityLat = document.querySelector('#city-lat');
    var cityLon = document.querySelector('#city-lon');
    var cityAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + ApiKey;

    fetch(cityAPI)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            cityMain.textContent = data[0].name + ", " + data[0].state;
            cityLat.setAttribute("value", data[0].lat);
            cityLon.setAttribute("value", data[0].lon);
        });

});

timeEl.textContent = currentTime;