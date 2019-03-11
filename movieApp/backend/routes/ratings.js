const express = require('express');
const router = express.Router();
const { createRating } = require('../db/queries/ratingsQueries.js')

//add rating
router.post('/',createRating);



module.exports = router;
