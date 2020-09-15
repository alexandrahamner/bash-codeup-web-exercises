"use strict";
(function () {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

    $.get(weatherURL, {
        "APPID": Open_Weather_APIID,
        "q": "San Antonio, US",
        "units": "imperial"
    }).done(function (data) {
        console.log(data);
    })


}());