

"use strict";

$(document).ready(function () {

    //key codes of the konami password
    const konamiKeys = [38,38,40,40,37,39,37,39,66,65,13];

    // the amount of keys pressed
    var count = 0;

    $(document).keydown(function (event) {

        // puts the key code of the key pressed into a variable
        var userKey = event.keyCode;
        // gets the index of konamiKeys based on the count (number of keys pressed.)
        var requiredKey = konamiKeys[count];

        //compares the key the user pressed to the konami key at index based on count.
        if (userKey == requiredKey) {
            //if the keys match, the count goes up by one, and continues to check for matched keys.
            count++
            //once the count equals the length of konamiKeys array, the cheat code is activated.
            if (count == konamiKeys.length) {
                //cheatActivated is called
                cheatActivated();
                //count restarts
                count = 0;
            }
        } else {
            //if the userKey and konami key do not match, the count starts over.
            count = 0;
        }

    });

    //TODO make something cool happen!
    function cheatActivated() {
        alert("Success!");
    }
})
