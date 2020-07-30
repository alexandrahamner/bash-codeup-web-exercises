"use strict";
(function () {
// 2.) showMultiplicationTable

    function showMultiplicationTable(number) {
        if (typeof number !== "number") {
            console.log("This is not a number");
        } else {
            for (var i = 1; i <= 10; i++) {
                var answer = (number * i);
                console.log(number + ' x ' + i + " = " + answer)
            }
        }

    }

    showMultiplicationTable(7);


// 3.)

    for (var i = 1; i <= 10; i++) {
        var num = Math.floor((Math.random() * (200 - 20) + 20));
        if (num % 2 === 0) {
            console.log(num + " is even.");
        } else {
            console.log(num + " is odd.");
        }

    }


// 4.)

// for(var i = 1; i <= 9; i++) {
//     var n = 0;
//     for (var k = 0; k < i; k++) {
//         n = i * Math.pow(10, k) + n;
//     }
//     console.log(n)


// Instructor's Solution for 4.)

    for (var z = 1; z <= 9; z++) {
        console.log(z.toString().repeat(z));
    }


// 5.)

    for (var i = 100; i >= 5; i -= 5) {
        console.log(i);
    }

}) ();


