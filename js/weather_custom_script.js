"use strict";
(function () {
    mapboxgl.accessToken = mapboxToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-98, 40], // starting position [lng, lat]
        zoom: 3// starting zoom
    });



    // var userInput =
    // function searchLocation(string) {
    //     geocode(string, mapboxToken)
    //         // .then(function(result) {
    //         //     getWeather(result[0],result[1]);
    //         //     return result;
    //         .then(function (data) {
    //
    //         })
    // }



    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

    function getForecast(lng,lat) {
        $.get(weatherURL, {
            "APPID": Open_Weather_APIID,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            for (var i = 0; i <= data.list.length - 1; i += 8) {
                var date = data.list[i].dt_txt
                var description = data.list[i].weather[0].description;
                var maxTemp = data.list[i].main.temp_max.toString();
                var minTemp = data.list[i].main.temp_min.toString();
                var feelsLike = data.list[i].main.feels_like.toString();
                var humidity = data.list[i].main.humidity;
                var wind = data.list[i].wind.speed;
                var finalHtml = "";

                finalHtml +=
                    "<div id=card-container class=\"my-2 col-12 col-md-6 col-lg-4\">\n" +
                    "<div id=day-card class=\"card daily-card\">\n" +
                    "<div class=\"card-header date\">\n" + date + " </div>\n" +
                    "<div class =\"card-body\">\n" +
                    "<div class=\"description\">\n" + description + "</div>\n" +
                    "<div class=\"temp\">\n" + "High of " + maxTemp +  "°F & Low of " + minTemp + "°F </div>\n" +
                    "<div class=\"feel-like\"> It'll feel like: " + feelsLike + "°F </div>\n" +
                    "<div class=\"humidity\">Humidity: " + humidity + "</div>\n" +
                    "<div class=\"wind\">Wind Speed: " + wind + "</div>\n" +
                    "</div>\n" +
                    "</div>"

                $('.forecast-row').append(finalHtml);
            }
             $('.forecast-row').append("<div id=card-container class=\"my-2 col-12 col-md-6 col-lg-4\">\n" + "<div id=logo-card class=\"card daily-card\">Logo Goes Here</div></div>");

        })
    }

    getForecast( -96.79,32.77,);






}());