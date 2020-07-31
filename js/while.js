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
            var remainingCones = amountToSell -= conesBought
            console.log(remainingCones);
            if (remainingCones !== 0) {
                if (conesBought > amountToSell) {
                    console.log("I cannot sell you " + conesBought + " I only have " + remainingCones);
                    break;
                } else {
                    console.log(conesBought + " cones sold.");
                }
            } else {
                console.log("Yay I have no more left!");
                break;
            }
        } while (amountToSell > 0);



}) ();