"use strict";
(function () {

//  1.)

    var x = 2
    console.log(x);
    while (x < 65536) {
        console.log(x += x);
    }


// 2.)

    var amountToSell = Math.floor((Math.random() * 50) + 50);
    console.log("This is how many ice cream cones I need to sell: " + amountToSell);

        do {
            var conesBought = Math.floor(Math.random() * 5) + 1;
            amountToSell -= conesBought
            if (amountToSell > conesBought) {
                console.log(conesBought + " cones sold");
            } else {
                console.log("Sorry, I can't sell you " + conesBought + " cones. I only have "
                    + amountToSell + "...");
            }

        } while (amountToSell > 0);
    console.log("Yay I sold all my cones!")

}) ();