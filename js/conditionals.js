"use strict";

(function () {
    /**
     *
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];


    /**
     *
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(analyzeColor(randomColor));

    /**
     * Refactor your above function to use a switch-case statement
     */

    function analyzeColor(colorName) {
        switch(colorName) {
            case "blue" :
                return "Blue is the color of the sky.";
                break;
            case "red" :
                return "Strawberries are red.";
                break;
            case "cyan" :
                return "I don't know anything about cyan.";
                break;
            default:
                return "I don't know anything about " + colorName + ".";
        }
    }

        console.log(analyzeColor(randomColor));


    /**
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    let userColor = prompt("Quick! Enter a random color!");
    alert(analyzeColor(userColor));


    /**
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, originalPrice) {
        switch (luckyNumber){
            case 0:
                return originalPrice;
            case 1:
                return originalPrice - (originalPrice * .10);
            case 2:
                return originalPrice - (originalPrice * .25);
            case 3:
                return originalPrice - (originalPrice * .35);
            case 4:
                return originalPrice - (originalPrice * .5);
            case 5:
                return 0;
        }
    }

    console.log(calculateTotal(5, 100));


    /**
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

// Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);

    let userOriginalBill = parseFloat(prompt("What was your total bill?"));
    alert("Your lucky number is " + luckyNumber + "!");
    let discountedBill = calculateTotal(luckyNumber, userOriginalBill);
    alert("The price before the discount was: $" + userOriginalBill + ". And your new total is: $" + discountedBill.toFixed(2) + "!");


    /**
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
        let userConfirmation = confirm("Would you like to enter a number?");

    function userAccepted() {
            if (userConfirmation) {
                let userNumber = prompt("Please enter a number (can be positive or negative.)");

                if (isNaN(userNumber)) {
                    alert("Hey! This isn't a number!");
                }
                else {
                    if (parseFloat(userNumber) % 2 === 0) {
                        alert(parseFloat(userNumber) + " is an even number.");
                    }
                    else {
                        alert(parseFloat(userNumber) + " is an odd number.");
                    }
                    let numberPlusHundred = parseFloat(userNumber) + 100;
                    alert(userNumber + " + 100 = " + numberPlusHundred);

                    if (parseFloat(userNumber) < 0) {
                        alert(userNumber + " is a negative number.");
                    } else {
                        alert(userNumber + " is a positive number.");
                    }
                }
            }
            else {
                alert("Oh ok, that's fine.");
            }
        }

        userAccepted();
})()