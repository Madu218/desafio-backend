const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


// GET ALL MOVIES (GET) 🌈
router.get('/', async (_, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// GET ONE MOVIE (GET) 🌈
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// CREATE ONE MOVIE (POST) 🌈
router.post('/', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        ratings: req.body.ratings ? req.body.ratings : null
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    }
    catch (e) {res.status(400).json({ message: e.message })};
});


// UPDATE ONE MOVIE (PUT) 🤨 funcionando igual o PATCH
router.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    }
    catch (e) {res.status(400).json({ message: e.message })};
});


// UPDATE ONE MOVIE PARTIALLY (PATCH) 🌈
router.patch('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    }
    catch (e) {res.status(400).json({ message: e.message })};
});


// DELETE ONE MOVIE (DELETE) 🌈
router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie has been deleted' });
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


module.exports = router;