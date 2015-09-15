/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

function drEvil(amount) {
  // write your solution here...
  if (amount === 1000000)
    return amount + " dollars (pinky)";
  else
    return amount + " dollars"
}

var money = 10;
console.log('drEvil(10)      -> ' + drEvil(money));

money = 1000000;
console.log('drEvil(1000000) -> ' + drEvil(money));
