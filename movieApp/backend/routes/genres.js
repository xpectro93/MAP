const express = require('express');
const router = express.Router();
const { getAllGrouped,
        getAllMoviesByGenre,
        getGenres } = require('../db/queries/genresQueries.js')


router.get('/getgenres', getGenres);

//GET Movie A Movies by Id
router.get('/:id', getAllMoviesByGenre);

// GET All movies grouped by genre
router.get('/', getAllGrouped)






module.exports = router;
