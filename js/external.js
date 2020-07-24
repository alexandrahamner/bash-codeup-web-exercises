console.log("Hello from External JavaScript");
alert("Welcome to my website!");
var response = prompt("What is your favorite color?");
alert("Awesome, " + response + " is my favorite color too!");


alert("You are about to rent a movie. Each movie is $3.00 per day.")
var movie1 = prompt("You have chosen The Little Mermaid! How many days did you want to rent it for?");
var movie2 = prompt("You have chosen Brother Bear! How many days did you want to rent it for?");
var movie3 = prompt("You have chosen Hercules! How many days did you want to rent it for?");
var movieTotal = (movie1 * 3) + (movie2 * 3) + (movie3 * 3);
alert("Your total is $" + movieTotal.toFixed(2) + ".");


var fbRate = prompt("You work at Facebook and you make $400 per hour. How many hours did you work this week? ");
var fbTotal = (fbRate * 400);
var amazonRate = prompt("You also work at Amazon and you make $380 per hour. How many hours did you work this week? ");
var amazonTotal = (amazonRate * 380);
var googleRate = prompt("You also work at Google and you make $350 per hour. How many hours did you work this week? ");
var googleTotal = (googleRate * 350);
var jobTotal = (fbTotal + amazonTotal + googleTotal);
alert("Calculating your weekly paycheck... You earned $" + jobTotal.toFixed(2) + ".");

