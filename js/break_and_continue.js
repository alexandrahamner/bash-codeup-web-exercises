"use strict";
(function () {


// 1.)

    var userNumber;

    do {
        userNumber = parseInt(prompt("Please submit an odd number between 1 and 50."))
    } while ((userNumber % 2 == 0) || (userNumber > 49) || (userNumber < 0));

    for (var x = 1; x <= 49; x += 2) {
        if (x == userNumber) {
            console.log("Yikes! Skipping: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + x);
    }


    // // instructor's solution
    // while (true) {
    //     userNumber = parseInt(prompt("Please submit an odd number between 1 and 50."));
    //     if ((userNumber % 2 !== 0) && (userNumber < 50) && (userNumber > 0)) {
    //         break;
    //     }
    // }
    //
    // console.log("Number to Skip: " + userNumber);
    // console.log();
    //
    // for (var i = 1; i < 50; i += 2) {
    //     if (i === userNumber) {
    //         console.log("Yikes! Skipping the number: " + userNumber);
    //         continue;
    //     }
    //     console.log("Here is an odd number: " + i);
    // }
    //
    // var i = 1
    // while (i < 50)  {
    //     if (i === userNumber) {
    //         console.log("Yikes! Skipping the number: " + userNumber);
    //         continue;
    //     }
    //     console.log("Here is an odd number: " + i);
    //     i += 2;
    // }




}) ();

