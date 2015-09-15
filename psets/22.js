/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var reading_list = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true
  },
  {
    title: 'Waking Up',
    author: 'Sam Harris',
    alreadyRead: true
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    alreadyRead: true
  },
  {
    title: 'The Four Steps to Epiphany',
    author: 'Steve Blank',
    alreadyRead: false
  }
];

for (var i = 0; i < reading_list.length; i++) {
  if (reading_list[i].alreadyRead) {
    console.log('You already read "' + reading_list[i].title +
                '" by ' + reading_list[i].author + '.');
  }
  else {
    console.log('You still need to read "' + reading_list[i].title +
                '" by ' + reading_list[i].author + '.');
  }
}
