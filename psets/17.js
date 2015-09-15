/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number) {
  var plural_noun;

  // handle a few exceptions
  switch (noun) {
    case 'sheep':
      plural_noun = 'sheep';
      break;
    case 'fish':
      plural_noun = 'fish';
      break;
    case 'goose':
      plural_noun = 'geese';
      break;
    case 'moose':
      plural_noun = 'moose'
      break;
    default:
      plural_noun = noun + 's';
  }
    return number + ' ' + plural_noun;
}

console.log(pluralize('bird', 3));
console.log(pluralize('tree', 2));
console.log(pluralize('fish', 50));
console.log(pluralize('moose', 5));
