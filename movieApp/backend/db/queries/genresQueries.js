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
  let genre = req.params.id
  db.any('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id WHERE genres.name = $1 GROUP BY movies.id, movies.title,genre_id,img_url, genres.name ORDER BY AR desc',genre)
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
          message: 'Could not retrieve all movies by genres'
          })
        next(err)
      });
}

module.exports = {
  getAllGrouped,
  getAllMoviesByGenre

}
