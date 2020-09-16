"use strict";
(function () {


    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-96.94, 32.82], // starting position [lng, lat]
        zoom: 12,  // starting zoom

    });


    function searchFor(location) {

        geocode(location, mapboxToken)
            .then(function (result) {
                getCurrentWeather(result[0], result[1]);
                getForecast(result[0], result[1]);
                return result;
            }).then(function (data) {
            map.flyTo({center: data, zoom: 12});

            var marker = new mapboxgl.Marker({
                draggable: true})
                .setLngLat(data)
                .addTo(map);

        });
    }

    $("#userSubmit").click(function (e) {
        e.preventDefault();
        var location = $("#userInput").val().trim();
        if (location !== "") {
            searchFor(location);
        }
    });

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather";


        /*     Below is the function to return the 5day forecast     */

    function getForecast(lng,lat) {
        $.get(forecastURL, {
            "APPID": Open_Weather_APIID,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            console.log(data);
            $(".forecast-row").empty();
            for (var i = 0; i <= data.list.length - 1; i += 8) {
                var date = data.list[i].dt_txt.substring(5,10).split("-").join("/");
                var description = data.list[i].weather[0].description;
                var maxTemp = data.list[i].main.temp_max.toString();
                var minTemp = data.list[i].main.temp_min.toString();
                var feelsLike = data.list[i].main.feels_like.toString();
                var humidity = data.list[i].main.humidity;
                var wind = data.list[i].wind.speed;
                var finalHtml = "";

                finalHtml +=
                    "<div id=card-container class=\"my-2 col-12 col-md-6 col-lg-4 text-center\">\n" +
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

    // getForecast( -96.79,32.77);

    /*     Below is the function to return the current weather     */

    function getCurrentWeather(lng,lat) {
        $.get(weatherURL, {
            "APPID": Open_Weather_APIID,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            console.log(data);
            $(".current-container").empty();
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
            var temp = data.main.temp;
            var description = data.weather[0].description;
            var wind = data.wind.speed;

            var finalHtml =
                "<div class=\"current-date\"><h2>"+ date +"</h2></div>\n" +
                "<hr>\n" +
                "<div class=\"current-temp\"><h3>"+ temp +"</h3></div>\n" +
                "<div class=\"current-description\"><h4>" + description +"</h4></div>\n" +
                "<div class=\"current-wind\"><h4>"+ wind +"</h4></div>\n"

            $('.current-container').append(finalHtml);

        })
    }

// getCurrentWeather(-96.79,32.77);


}());