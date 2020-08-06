(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            circle.area = Math.PI * Math.pow(this.radius, 2);

            return circle.area;
        },

        logInfo: function (doRounding) {

            // TODO: complete this method.
            if (doRounding) {
                var areaRounded = Math.round(this.getArea());
                console.log("Area of a circle with radius: " + this.radius + ", is: " + areaRounded);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
