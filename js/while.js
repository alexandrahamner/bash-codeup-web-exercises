"use strict";
(function () {

//  1.)
    var x = 2
    console.log(x);
    while (x < 65536) {
        console.log(x += x);
    }

}) ();