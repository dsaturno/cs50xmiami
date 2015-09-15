/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(first, second) {
  return (first > second) ? first : second;
}

var first_num  = 22;
var second_num = 20;

console.log("The greater number of " + first_num + " and " + second_num +
            " is " + greaterNum(first_num, second_num) + ".");
