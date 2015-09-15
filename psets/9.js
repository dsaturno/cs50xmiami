/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  var not  = 'not';
  var bad  = 'bad';
  var good = 'good';

  if ((sentence.search(not) !== -1) && (sentence.search(bad) !== -1))
  {
    sentence = sentence.replace(
      sentence.substring(
        sentence.search(not), (sentence.search(bad) + bad.length)), good);
  }

  return sentence;
}

console.log("Testing: notbad(\'This dinner is not that bad!\') -> " + notBad('This dinner is not that bad!'));
console.log("Testing: notbad(\'This movie is not so bad!\')    -> " + notBad('This movie is not so bad!'));
console.log("Testing: notbad(\'This dinner is bad!\')          -> " + notBad('This dinner is bad!'));
