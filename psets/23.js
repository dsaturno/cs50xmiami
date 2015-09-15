/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var favorite_movie = {
  title:    'Metropolis',
  release:  'January 10, 1927',
  director: 'Fritz Lang',
  composer: 'Gottfried Huppertz',
  duration: 148,
  stars:    ['Alfred Abel', 'Briggite Helm',
             'Gustav Fröhlich', 'Rudolf Klein-Rogge']
}

function display_movie(movie) {
  console.log(movie.title + ' lasts ' + movie.duration + ' minutes.' +
              '\nReleased on ' + movie.release +
              '\nDirected by ' + movie.director +
              '\nOriginal score composed by ' + movie.composer  +
              '\nStars: ');

  for (var i = 0; i < movie.stars.length; i++) {
    console.log(' - ' + movie.stars[i]);
  }
}

display_movie(favorite_movie);
