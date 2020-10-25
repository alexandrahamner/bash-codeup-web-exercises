"use strict";
(function() {

    let i;
//Initiating the array.
    let names = [
        "Andrew",
        "Elizabeth",
        "Emily",
        "Joe",
        "Robert",
        "Seth"]

    console.log(names.length);
    console.log(names[5]);

    let mix = ["Hello", true, 5, [1, 2, 3], function () {
        console.log("Howdy!")
    }, false]
    console.log(mix.length);
    mix[mix.length] = "Ally";
    console.log(mix.length);
    // to call a function by referring to the mix array do the console.log below!
    console.log(mix[4]());


    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6];
    let arr3 = arr1 + arr2;
    console.log(arr3);


    function isArray(arr) {
        return (typeof arr === typeof []);
    }

    console.log(isArray([1, 2, 3]));
    console.log(isArray("Hello"));


    // Space CountDown
    let countDown = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    for (i = 0; i < countDown.length ; i++) {
        if (i === 10) {
            alert("Zero! Blast off!");
        } else {
            alert(countDown[i]);
        }
    }


    // Iterating this list
    let products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];
    for (i = 0; i < products.length; i++) {
        console.log(products[i]);
    }
    products.forEach(function (product) {
        console.log(product);
    })


    // Pizza!
    let toppings = ['Cheese', 'Ham', 'Basil', 'Tomatoes', 'Green Pepper'];
    function makePizza(x) {
        console.log("I have a tasty pizza with " + x.join(" and ") + ".");
    }
    makePizza(toppings);
})();