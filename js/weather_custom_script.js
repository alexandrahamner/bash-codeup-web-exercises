"use strict";
(function () {


    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-96, 37.8], // starting position [lng, lat]
        zoom: 3,  // starting zoom

    });


    function searchLocation(location) {

        geocode(location, mapboxToken)
            .then(function (result) {
                getCurrentWeather(result[0], result[1]);
                getForecast(result[0], result[1]);
                return result;
            }).then(function (data) {
            map.flyTo({
                center: data,
                zoom: 11});

            var marker = new mapboxgl.Marker({
                draggable: true,
            })
                .setLngLat(data)
                .addTo(map);

            function dragMarker() {
                var dragLocation = marker.getLngLat();
                getCurrentWeather(dragLocation.lng, dragLocation.lat);
                getForecast(dragLocation.lng, dragLocation.lat);
                map.flyTo({
                    center: [dragLocation.lng, dragLocation.lat],
                    zoom: 11,
                })
            }

            marker.on('dragend', dragMarker)

        });
    }

    searchLocation("San Antonio, TX");

    $("#userSubmit").click(function (e) {
        e.preventDefault();
        var location = $("#userInput").val().trim();
        if (location !== "") {
            searchLocation(location);
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
            $(".forecast-container").empty();
            for (var i = 0; i <= data.list.length - 1; i += 8) {
                var date = data.list[i].dt_txt.substring(5,10).split("-").join("-");
                var description = data.list[i].weather[0].description;
                var maxTemp = data.list[i].main.temp_max.toString();
                var minTemp = data.list[i].main.temp_min.toString();
                var feelsLike = data.list[i].main.feels_like.toString();
                var humidity = data.list[i].main.humidity;
                var wind = data.list[i].wind.speed;
                var finalHtml = "";

                finalHtml +=
                    "<div id=day-card class=\"card daily-card\">\n" +
                    "<div class=\"card-header date\">\n" + date + " </div>\n" +
                    "<div class =\"card-body\">\n" +
                    "<div class=\"description\">\n" + description + "</div>\n" +
                    "<div class=\"temp\">\n" + "High of " + maxTemp +  "°F & Low of " + minTemp + "°F </div>\n" +
                    "<div class=\"feel-like\"> It'll feel like: " + feelsLike + "°F </div>\n" +
                    "<div class=\"humidity\">Humidity: " + humidity + "</div>\n" +
                    "<div class=\"wind\">Wind Speed: " + wind + "</div>\n" +
                    "</div>\n"


                $('.forecast-container').append(finalHtml);
            }

        })
    }


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
            var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
            var city = data.name;
            var temp = data.main.temp;
            var description = data.weather[0].description;
            var iconcode = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            var wind = data.wind.speed;
            var humidity = data.main.humidity;

            var finalHtml =
            "<h4 class=\"card-title font-weight-bold\">"+ city +"</h4>\n" +
            "<p class=\"text-muted\">" + date + ", time, " + description + "</p>" +
            "<div class=\"d-flex justify-content-between\">" +
            "<p class=\"display-1 degree\">"+ temp +"<span class=\"display-4 fahrenheit\">°F<span></span></p>\n" +
            "<div id=\"icon\"><img id=\"wicon\" src=\"\" alt=\"Weather icon\"></div>" +
            "</div>\n" +
            "<div class=\"d-flex justify-content-between mb-4\">\n" +
            "<p><i class=\"fas fa-tint fa-lg text-info pr-2\"></i>Humidity: "+ humidity +"%</p>\n" +
            "<p><i class=\"fas fa-leaf fa-lg grey-text pr-2\"></i>Winds: "+ wind +"mph</p>\n" +
            "</div>"

            $('.current-container').append(finalHtml);
            $('#wicon').attr('src', iconcode);
        })
    }



}());