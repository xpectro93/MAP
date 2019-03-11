const express = require('express');
const router = express.Router();
const { getAllMovies,
        getMovieByTitle,
        getAll,
        getSpecificById,
        getSpecificByName } = require('../db/queries/moviesQueries.js')

//MOVIES

// GET All movies
router.get('/', getAllMovies);

//GET all movies with their comments, and avg rating.
router.get('/everything', getAll);

//GET Movie A Movies by Id
router.get('/:id', getMovieByTitle);

//GET A movie with all their comments and avg rating.
router.get('/everything/:id', getSpecificById);

//GET A movie with all their comments and avg rating.
router.get('/everythingname/:id', getSpecificByName);


module.exports = router;
