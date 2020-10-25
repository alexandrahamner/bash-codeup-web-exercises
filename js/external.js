"use strict";
(function (){

    console.log("Hello from External JavaScript");

    alert("Welcome to my website!");
    let response = prompt("What is your favorite color?");
    alert("Awesome, " + response + " is my favorite color too!");

    alert("You are about to rent a movie. Each movie is $3.00 per day.")
    let movie1 = prompt("You have chosen The Little Mermaid! How many days did you want to rent it for?");
    let movie2 = prompt("You have chosen Brother Bear! How many days did you want to rent it for?");
    let movie3 = prompt("You have chosen Hercules! How many days did you want to rent it for?");
    let pricePerDay = 3;
    let movieTotal = Number(movie1 * pricePerDay) + (movie2 * pricePerDay) + (movie3 * pricePerDay);
    alert("Your total is $" + movieTotal.toFixed(2) + ".");

    let mermaid = 3;
    let brotherBear = 5;
    let hercules = 1;
    let totalDays = (mermaid + brotherBear + hercules);
    let totalPrice = totalDays * pricePerDay;
    console.log("Your total price is $" + totalPrice + ".");




    let googlePay = 400;
    let amazonPay = 380;
    let fbPay = 350;
    let fbHours = prompt("You work at Facebook and you make $400 per hour. How many hours did you work this week? ");
    let fbTotal = (fbHours * fbPay);
    let amazonHours = prompt("You also work at Amazon and you make $380 per hour. How many hours did you work this week? ");
    let amazonTotal = (amazonHours * amazonPay);
    let googleHours = prompt("You also work at Google and you make $350 per hour. How many hours did you work this week? ");
    let googleTotal = (googleHours * googlePay);
    let jobTotal = Number(fbTotal + amazonTotal + googleTotal);
    alert("Calculating your weekly paycheck... You earned $" + jobTotal.toFixed(2) + ".");






    alert("You are about to enroll in this course.");
    let classSize = prompt("What is the class size?");
    let classConflict = confirm("Are there no schedule conflicts?");
    let classConfirm = (classSize < 17) && (classConflict == true);
    console.log(classConfirm);
    alert ("Welcome to the class! It's" + classConfirm + "!");


    let numberOfItems = 4;
    let coupon = true;
    let isPremium = true;
    let confirmPurchase = coupon && ((numberOfItems > 2) || isPremium);
    console.log(confirmPurchase);

    alert("Welcome to the Online Store!");
    prompt("How many items have you purchased?");
    confirm("Are you a Premium member?");
    confirm("Do you have an unexpired coupon?");
    alert("You are able to use this coupon!");

})();

