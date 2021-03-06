/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var new_a = b.slice(0, 2);
  new_a = new_a.concat(a.substring(2));

  var new_b = a.slice(0, 2);
  new_b = new_b.concat(b.substring(2));

  return new_a + ' ' + new_b;
}

console.log(mixUp('dog', 'dinner'));
