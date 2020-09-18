"use strict";
(function () {


    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
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
                var maxTemp = Math.round(data.list[i].main.temp_max);
                var minTemp = Math.round(data.list[i].main.temp_min);
                var humidity = data.list[i].main.humidity;
                var wind = data.list[i].wind.speed;
                var finalHtml = "";

                finalHtml +=
                    "<div class=\"card daily-card mb-2 border-none box-shadow-custom\">\n" +
                    "<div class=\"card-header bg-dark text-white date quicksand\">\n" + date + " </div>\n" +
                    "<div class =\"card-body raleway\">\n" +
                    "<div class=\"description\">\n" + description + "</div>\n" +
                    "<div class=\"temp\">\n" + maxTemp +  "°F / " + minTemp + "°F </div>\n" +
                    "<div class=\"humidity\">Humidity: " + humidity + "%</div>\n" +
                    "<div class=\"wind\">Wind Speed: " + wind + " mph</div>\n" +
                    "</div>"



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
            var time = today.getHours() + ":" + today.getMinutes()
            var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
            var city = data.name;
            var temp = Math.round(data.main.temp);
            var iconcode = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            var wind = data.wind.speed;
            var humidity = data.main.humidity;

            var finalHtml =
            "<h3 class=\"card-title quicksand font-weight-bold\">"+ city +"</h3>\n" +
            "<h5 class=\"text-muted raleway\">" + time + " " + date + "</h5>" +
            "<div class='d-flex flex-column'>" +
            "<div id=\"icon\"><img id=\"wicon\" src=\"\" alt=\"Weather icon\" ></div>" +
            "<p class=\"display-3 degree quicksand\">"+ temp +"<span class=\"fahrenheit align-text-top\">°F</span></p>\n" +
            "</div>" +
            "<div class=\"mb-4\">\n" +
            "<p class='raleway'><i class=\"fas fa-tint fa-lg text-info pr-2\"></i>Humidity: "+ humidity +"%</p>\n" +
            "<p class='raleway'><i class=\"fas fa-leaf fa-lg grey-text pr-2\"></i>Winds: "+ wind +"mph</p>\n" +
            "</div>"

            $('.current-container').append(finalHtml);
            $('#wicon').attr('src', iconcode);
        })
    }



}());