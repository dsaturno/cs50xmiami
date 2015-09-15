/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...

function helloWorld(language) {
  switch (language) {
    case 'es':
      return 'Hola, Mundo!';
      break;
    case 'fr':
      return 'Salut le monde!';
      break;
    case 'en':
      return 'Hello, World!';
      break;
    default:
      return 'Hello, World!';
  }
}

console.log('helloWorld(\'es\') -> 'helloWorld('es'));
console.log('helloWorld(\'fr\') -> 'helloWorld('fr'));
console.log('helloWorld()       -> 'helloWorld());
