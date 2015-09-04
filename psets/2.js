/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var current_age    = 22;
var max_age        = 120;
var beers_p_day    = 1;
var beers_for_life = (beers_p_day * 365) * (max_age - current_age);

console.log("You will need " + beers_for_life + " to last you " +
            "until the ripe old age of " + max_age);
