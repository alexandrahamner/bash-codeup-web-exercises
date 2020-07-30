"use strict";
(function () {
// 1.)

    while (true) {
        var userNumber = prompt("Please submit an odd number between 1 and 50.");
        if (userNumber % 2 !== 1) {
            console.log("Invalid Input!");
            break;
        }
    }


}) ();

