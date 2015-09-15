/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
const MAX_AGE = 120;
function calculateSupply(current_age, amount_per_day) {
  var total_amount = (amount_per_day * 365) * (MAX_AGE - current_age);
  console.log("You will need " + total_amount + " to last you " +
              "until the ripe old age of " + MAX_AGE + ".");
}

calculateSupply(22, 2);
calculateSupply(21, 3);
calculateSupply(20, 5);
