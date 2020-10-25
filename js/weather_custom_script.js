"use strict";
(function () {
    //Creating the Mapbox Map
    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-96, 37.8], // starting position [lng, lat]
        zoom: 3,  // starting zoom

    });

    //Searches for and places a marker on the location the user types in by using geocoding. The marker is also draggable.
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
            //allows user to drag the marker
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

    //default location when the page loads
    searchLocation("San Antonio, TX");

    //retrieves the user's input in the search bar
    $("#userSubmit").click(function (e) {
        e.preventDefault();
        var location = $("#userInput").val().trim();
        //making sure the search isn't empty
        if (location !== "") {
            searchLocation(location);
        }
    });


    //Links to get the forecast and current weather
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
            //everytime the location changes, it refreshes the container.
            $(".forecast-container").empty();
            for (var i = 0; i <= data.list.length - 1; i += 8) {
                var date = data.list[i].dt_txt.substring(5,10).split("-").join("-");
                var description = data.list[i].weather[0].description;
                var maxTemp = Math.round(data.list[i].main.temp_max);
                var minTemp = Math.round(data.list[i].main.temp_min);
                var humidity = data.list[i].main.humidity;
                var wind = data.list[i].wind.speed;
                var finalHtml = "";

                finalHtml += `<div class= "card daily-card mb-2 border-none box-shadow-custom">`
                finalHtml += `<div class= "card-header bg-dark text-white date quicksand">${date}</div>`
                finalHtml += `<div class = "card-body raleway">`
                finalHtml += `<div class= "description">${description}</div>`
                finalHtml += `<div class= "temp">"${maxTemp}°F / ${minTemp}°F </div>`
                finalHtml += `<div class= "humidity">Humidity: ${humidity}%</div>`
                finalHtml += `<div class= "wind">Wind Speed: ${wind} mph</div>`
                finalHtml += `</div>`


                //adds each card to the forecast container
                $('.forecast-container').append(finalHtml);
            }

        })
    }

    // collapsible 5day forecast button, with a slide toggle.
    $(".collapse-button").click(function () {
        $(".forecast-container").slideToggle("slow");
    })

    /*     Below is the function to return the current weather     */
    function getCurrentWeather(lng,lat) {
        $.get(weatherURL, {
            "APPID": Open_Weather_APIID,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            $(".current-container").empty();
            var today = new Date();
            var time = today.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
            var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
            var city = data.name;
            var temp = Math.round(data.main.temp);
            var iconcode = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            var wind = data.wind.speed;
            var humidity = data.main.humidity;

            var finalHtml =
                "<h3 class=\"card-title quicksand font-weight-bold\">"+ city +"</h3>" +
                "<h5 class=\"text-muted raleway\">" + date + "<br>" + time + "</h5>" +
                "<div class='d-flex flex-column'>" +
                "<div id=\"icon\"><img id=\"wicon\" src=\"\" alt=\"Weather icon\" ></div>" +
                "<p class=\"display-3 degree quicksand\">"+ temp +"<span class=\"fahrenheit align-text-top\">°F</span></p>" +
                "</div>" +
                "<div class=\"mb-4\">" +
                "<p class='raleway'><i class=\"fas fa-tint fa-lg text-info pr-2\"></i>Humidity: "+ humidity +"%</p>" +
                "<p class='raleway'><i class=\"fas fa-leaf fa-lg grey-text pr-2\"></i>Winds: "+ wind +"mph</p>" +
                "</div>"

            $('.current-container').append(finalHtml);
            $('#wicon').attr('src', iconcode);
        })
    }

}());