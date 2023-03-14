const TMDB = require('themoviedb');
TMDB.common.api_key = 'your_api_key_here';
TMDB.movies.getPopular({}, (err, res) => {
    if (err) console.error(err);
    console.log(res);
  });
  TMDB.search.getMovie({query: 'movie_name'}, (err, res) => {
    if (err) console.error(err);
    console.log(res);
  });
  TMDB.movies.getById({id: 155}, (err, res) => {
    if (err) console.error(err);
    console.log(res);
  });
  //you can continue making more research on endpoints
   