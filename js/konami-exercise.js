

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
            if (count == 0) {
                $("#k").css("text-transform","uppercase");
            }
            if (count == 1) {
                $("#o").css("text-transform","uppercase");
            }
            if (count == 2) {
                $("#n").css("text-transform","uppercase");
            }
            if (count == 3) {
                $("#a").css("text-transform","uppercase");
            }
            if (count == 4) {
                $("#m").css("text-transform","uppercase");
            }
            if (count == 5) {
                $("#i").css("text-transform","uppercase");
            }
            if (count == 6) {
                $("#c").css("text-transform","uppercase");
            }
            if (count == 7) {
                $("#o2").css("text-transform","uppercase");
            }
            if (count == 8) {
                $("#d").css("text-transform","uppercase");
            }
            if (count == 9) {
                $("#e").css("text-transform","uppercase");
            }
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
            //if the userKey and konami key do not match the text turns red and the count starts over.
            $("h1").css('color','red');
            setTimeout(function () {
                $("h1").css('color', 'black');
            }, 500)
            count = 0;
        }

    });

    //TODO add some effect for when the user is typing


    //TODO make something cool happen!
    function cheatActivated() {
        $("body").css({"background": "linear-gradient(-45deg, #eaac8b, #6d597a, #eaac8b, #e56b6f)", "background-size": "300% 300%", "animation": "gradient 20s ease infinite"});
        $("#password-text").text("success");
    }

})
