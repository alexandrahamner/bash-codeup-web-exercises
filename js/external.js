"use strict";


console.log("Hello from External JavaScript");

alert("Welcome to my website!");
var response = prompt("What is your favorite color?");
alert("Awesome, " + response + " is my favorite color too!");






alert("You are about to rent a movie. Each movie is $3.00 per day.")
var movie1 = prompt("You have chosen The Little Mermaid! How many days did you want to rent it for?");
var movie2 = prompt("You have chosen Brother Bear! How many days did you want to rent it for?");
var movie3 = prompt("You have chosen Hercules! How many days did you want to rent it for?");
var pricePerDay = 3;
var movieTotal = Number(movie1 * pricePerDay) + (movie2 * pricePerDay) + (movie3 * pricePerDay);
alert("Your total is $" + movieTotal.toFixed(2) + ".");

var mermaid = 3;
var brotherBear = 5;
var hercules = 1;
var totalDays = (mermaid + brotherBear + hercules);
var totalPrice = totalDays * pricePerDay;
console.log("Your total price is $" + totalPrice + ".");





var googlePay = 400;
var amazonPay = 380;
var fbPay = 350;
var fbHours = prompt("You work at Facebook and you make $400 per hour. How many hours did you work this week? ");
var fbTotal = (fbHours * fbPay);
var amazonHours = prompt("You also work at Amazon and you make $380 per hour. How many hours did you work this week? ");
var amazonTotal = (amazonHours * amazonPay);
var googleHours = prompt("You also work at Google and you make $350 per hour. How many hours did you work this week? ");
var googleTotal = (googleHours * googlePay);
var jobTotal = Number(fbTotal + amazonTotal + googleTotal);
alert("Calculating your weekly paycheck... You earned $" + jobTotal.toFixed(2) + ".");






alert("You are about to enroll in this course.");
var classSize = prompt("What is the class size?");
var classConflict = confirm("Are there no schedule conflicts?");
var classConfirm = (classSize < 17) && (classConflict == true);
console.log(classConfirm);
alert ("Welcome to the class! It's" + classConfirm + "!");






var numberOfItems = 4;
var coupon = true;
var isPremium = true;
var confirmPurchase = coupon && ((numberOfItems > 2) || isPremium);
console.log(confirmPurchase);

alert("Welcome to the Online Store!");
prompt("How many items have you purchased?");
confirm("Are you a Premium member?");
confirm("Do you have an unexpired coupon?");
alert("You are able to use this coupon!");



