/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10.
- For each iteration of the for loop,
  it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

- Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

// write your solution here...
console.log('Multiplication Table\n');
for (var i = 1; i <= 10; i++)
{
  console.log(i);
  for (var j = 0; j <= 10; j++)
    console.log('  ' + j + ' * ' + i + ' = ' + (j * i));
}
