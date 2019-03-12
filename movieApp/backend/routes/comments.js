const express = require('express');
const router = express.Router();
const { createComment,
        getAllCommentsPerMovieId,
        getAllCommentsPerMovieTitle,
        getComments } = require('../db/queries/commentsQueries.js')

//add rating
router.post('/',createComment);

router.get('/movieid/:id', getAllCommentsPerMovieId);

router.get('/movie/:id', getComments)

router.get('/movietitle/:id', getAllCommentsPerMovieTitle);



module.exports = router;
