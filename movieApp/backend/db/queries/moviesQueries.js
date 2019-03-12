const db = require('./index.js');

// router.get('/', getAllMovies);
const getAllMovies = ( req, res, next ) => {

  db.any('SELECT * FROM movies')
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message:"Got All movies",
          data: data
        })
    })
    .catch(err => {
      res.status(404)
        .json({
        status:404,
        message: 'Could not retrieve all movies'
        })
      next(err)
    });
};


//GET Movie A Movies by Id
// router.get('/:id', getMovieByTitle);
const getMovieByTitle = (req,res, next ) => {
  let movieId = req.params.id
  db.one('SELECT * FROM movies WHERE title=$1',movieId)
    .then(data => {
      res.status(200)
        .json({
          status:"Success",
          message:"Got Movie with title: "+ movieId,
          data:data
        })

    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:"Could not retrieve movie with the id of "+ movieId
        })
        next(err)
    })
}


//GET all movies with their comments, and avg rating.
// router.get('/everything', getAll);
const getAll = ( req, res, next ) => {
  db.any('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id GROUP BY movies.id, movies.title,genre_id,img_url, genres.name ORDER BY AR desc')
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message:"Got All movies",
          data: data
        })
    })
    .catch(err => {
      res.status(404)
        .json({
        status:404,
        message: 'Could not retrieve all movies'
        })
      next(err)
    });

}


//GET A movie with all their comments and avg rating.
// router.get('/everything/:id', getSpecific);
const getSpecificById = ( req, res, next ) => {
  let movie = req.params.id
  db.one('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id WHERE movies.id = $1 GROUP BY movies.id, movies.title,genre_id,img_url, genres.name ORDER BY AR desc',movie)
    .then(data => {
      res.status(200)
        .json({
          status:"Success",
          message:"Got movie info with the id "+ movie,
          data:data

        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:"Could not retrieve specific movies info"
        })
        next(err)
    })
}

const getSpecificByName = ( req, res, next ) => {
  let movie = '%'+req.params.id+'%'
  db.any("SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id WHERE LOWER(movies.title) LIKE $1 GROUP BY movies.id, movies.title,genres.name,img_url ORDER BY AR desc",movie)
    .then(data => {
      res.status(200)
        .json({
          status:"Success",
          message:"Got movie info with the name "+ movie,
          data:data

        })

    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:"Could not retrieve specific movies info"
        })
        next(err)
    })
}


module.exports = {
  getAllMovies,
  getMovieByTitle,
  getAll,
  getSpecificById,
  getSpecificByName

}
