const express = require('express');
const router = express.Router();
const { getAllGrouped,
        getAllMoviesByGenre } = require('../db/queries/genresQueries.js')

// GET All movies grouped by genre
router.get('/', getAllGrouped)

//GET Movie A Movies by Id
router.get('/:id', getAllMoviesByGenre);




module.exports = router;
