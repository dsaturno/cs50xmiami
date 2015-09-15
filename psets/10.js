/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(num_children, partner_name, geo_location, job_title) {
  console.log("You will be a " + job_title + " in " + geo_location +
              ", and married to " + partner_name + " with "        +
              num_children + " kids.");
}

console.log(tellFortune(0, 'Emma Watson', 'Caracas', 'Full-Stack Web Developer'));
console.log(tellFortune(1, 'Jeniffer Lawrence', 'Portland', 'Astronaut'));
console.log(tellFortune(2, 'Tessa Thompson', 'Tokyo', 'Musician'));
