"use strict";
(function () {
    mapboxgl.accessToken = mapboxToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-98, 40], // starting position [lng, lat]
        zoom: 3// starting zoom
    });

    var userInput =
    function placeMarker(info, token, map) {
        geocode(info.address, token).then(function(coordinates) {
            var marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .addTo(map)
        });
    }


    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast";
    function getWeather(lng,lat) {
        $.get(weatherURL, {
            "APPID": Open_Weather_APIID,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            console.log(data);
        })
    }



}());