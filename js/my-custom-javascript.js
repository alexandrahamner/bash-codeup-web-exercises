"use strict";

$(document).ready(function() {

    // var idContents = $('#container').html();
    // alert(idContents);

    // $('.codeup').css("border","red solid 1px");

    // $('li').css("font-size","20px");
    //
    // $('h1 , li , p').css("color", "purple");
    //
    // var h1Contents = $("h1").html();
    // alert(h1Contents);

    /*  09/10/20 Mouse Event Exercise  */

    //TODO Add jQuery code that will change the background color of an h1 element when clicked.
    $("#main-title").click(function() {
        $(this).css('background-color','teal')
    });

    //TODO Make all paragraphs have a font size of 18px when they are double clicked.
    $('.codeup').dblclick(function () {
        $(this).css('font-size', '18px');
    })

    //TODO Set all li text color to red when the mouse is hovering; reset to black when it is not.
    $('.list-item').hover(function () {
        $(this).css('color','red');
    }, function () {
        $(this).css('color','black');
    });
});