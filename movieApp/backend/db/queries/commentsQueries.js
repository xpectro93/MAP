const db = require('./index.js');


const createComment = (req, res, next ) => {
  db.none('INSERT INTO comments(text,movie_id) VALUES(${text}, ${movie_id})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New comment has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE comment'
        })
        next(err)
    })
};

const getAllCommentsPerMovieId = (req, res, next ) => {
  let movie = req.params.id
  db.any('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR, comments.text FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id JOIN comments ON movies.id = comments.movie_id WHERE movies.id =$1 GROUP BY movies.id, movies.title,genre_id,img_url, genres.name, comments.text ORDER BY AR desc',movie)
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
 const getComments = (req, res, next ) => {
   let movie = req.params.id
   db.any('SELECT * FROM comments WHERE movie_id = $1',movie)
   .then(data => {
     res.status(200)
       .json({
         status:"Success",
         message:"Got comments for movie_id: "+ movie,
         data:data
       })
   })
   .catch(err => {
     res.status(404)
       .json({
         status:404,
         message:"Could not retrieve comments from movie_id: " +movie
       })
       next(err)
   })
  }


 const getAllCommentsPerMovieTitle = (req, res, next ) => {
   let movie = req.params.id
   db.any('SELECT movies.id,movies.title,genres.name,img_url, avg(ratings.stars) AS AR, comments.text FROM ratings JOIN movies ON ratings.movie_id = movies.id JOIN genres ON genres.id = movies.genre_id JOIN comments ON movies.id = comments.movie_id WHERE movies.title =$1 GROUP BY movies.id, movies.title,genre_id,img_url, genres.name, comments.text ORDER BY AR desc',movie)
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



module.exports = {
  createComment,
  getAllCommentsPerMovieId,
  getAllCommentsPerMovieTitle,
  getComments
}
