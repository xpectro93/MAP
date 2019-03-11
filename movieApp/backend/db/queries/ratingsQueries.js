const db = require('./index.js');


const createRating = (req, res, next ) => {
  db.none('INSERT INTO ratings(stars,movie_id) VALUES(${stars}, ${movie_id})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New rating has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE rating'
        })
        next(err)
    })
};

module.exports = {
  createRating
}
