const express = require('express');
const router = express.Router();


const moviesRouter = require('./movies');
const showsRouter = require('./shows');
const seasonsRouter = require('./seasons');
const episodesRouter = require('./episodes');

router.use('/movies', moviesRouter);
router.use('/shows', showsRouter);
router.use('/shows/:idShow/seasons', seasonsRouter);
router.use('/shows/:idShow/seasons/:isSeason/episodes', episodesRouter);


module.exports = router;