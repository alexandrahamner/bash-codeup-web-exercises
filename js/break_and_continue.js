"use strict";
(function () {


// 1.)

    do {
        var userNumber = prompt("Please submit an odd number between 1 and 50.")
    } while ((userNumber % 2 == 0) || (userNumber > 49) || (userNumber < 0));

    for (var x = 1; x <= 49; x += 2) {
        if (x == userNumber) {
            console.log("Yikes! Skipping: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + x);
    }




}) ();

