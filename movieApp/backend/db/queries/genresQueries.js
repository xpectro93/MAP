const db = require('./index.js');

const getAllGrouped = ( req, res, next ) => {

  db.any('SELECT * FROM movies JOIN genres ON genres.id = movies.genre_id')
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message:"Got All movies and Genres",
          data: data
        })
    })
    .catch(err => {
      res.status(404)
        .json({
        status:404,
        message: 'Could not retrieve all movies by genres'
        })
      next(err)
    });
};

const getAllMoviesByGenre = ( req, res, next ) => {
  // let genre = '%'+req.params.id+'%';
  let genre = req.params.id;

  db.any('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id WHERE LOWER(genres.name) = $1 GROUP BY movies.id, movies.title,genres.name,img_url ORDER BY AR DESC',genre)
    .then(data => {
      res.status(200)
        .json({
          status:"Success",
          message:"Got movies by the genre "+ genre,
          data:data
        })
      })
      .catch(err => {
        res.status(404)
          .json({
          status:404,
          message: 'Could not retrieve all movies by genresx'
          })
        next(err)
      });
}
const getGenres = (req,res,next) => {
  db.any('SELECT name FROM genres')
  .then(data => {
    res.status(200)
      .json({
        status:"Success",
        message:"Got All genres",
        data:data
      })
    })
    .catch(err => {
      res.status(404)
        .json({
        status:404,
        message: 'Could not retrieve all genres'
        })
      next(err)
    });
}

module.exports = {
  getAllGrouped,
  getAllMoviesByGenre,
  getGenres

}
