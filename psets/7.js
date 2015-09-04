/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var first_char = s.charAt(0);
  var new_s = first_char;

  for (var i = 1, n = s.length; i < n; i++) {
    if (s.charAt(i) === first_char)
      new_s = new_s.concat('*');
    else
      new_s = s.concat(charAt(i)); // this line returns an error
  }
    return new_s;

}

console.log(fixStart('babble'));
