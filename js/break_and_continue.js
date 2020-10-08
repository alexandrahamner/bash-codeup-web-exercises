"use strict";
(function () {

    var userNumber;
    //continues to prompt the user until a number between 1 and 50 is submitted.
    while (true) {
            userNumber = parseInt(prompt("Please submit an odd number between 1 and 50."));
            if ((userNumber % 2 !== 0) && (userNumber < 50) && (userNumber > 0)) {
                break;
            }
        }
    //Loops through the numbers 1 - 50, console.logs "skip" on the user's chosen number.
    for (var x = 1; x <= 49; x += 2) {
        if (x === userNumber) {
            console.log("Yikes! Skipping: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + x);
    }

}) ();

