/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(birth_year, current_year) {
  console.log("You are either " + (current_year - birth_year) +
              " or " + ((current_year - 1) - birth_year));
}

calculateAge(1993, 2015);
calculateAge(1981, 2015);
calculateAge(1961, 2015);

var this_year = new Date().getFullYear();
console.log("Bonus: " + this_year);
