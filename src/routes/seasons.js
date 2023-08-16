const express = require('express');
const router = express.Router();

const Season = require('../models/Season');


// GET ALL
router.get('/', async (req, res) => {
    try {
        const seasons = await Season.find({
            show: req.params.idShow
        });
        res.json(seasons);
    }
    catch (e) {res.json({ message: e })};
});

// GET ONE
router.get('/:idSeason', async (req, res) => {
    try {
        const season = await Season.findById(req.params.idSeason);
        if (!season) return res.status(404).send('Season not found');
        res.json(season);
    }
    catch (e) {res.json({ message: e })};
});

// CREATE ONE (POST)
router.post('/', async (req, res) => {
    const season = new Season({
        number: req.body.number,
        show: req.params.idShow
    });
    try {
        const savedSeason = await season.save();
        res.json(savedSeason);
    }
    catch (e) {res.json({ message: e })};
});


// UPDATE ONE (PUT)
router.put('/:idSeason', async (req, res) => {
    try {
        const updatedSeason = await Season.findByIdAndUpdate(req.params.idSeason, req.body, {new: true});
        res.json(updatedSeason);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// UPDATE ONE (PATCH)
router.patch('/:idSeason', async (req, res) => {
    try {
        const updatedSeason = await Season.findByIdAndUpdate(req.params.idSeason, req.body, {new: true});
        res.json(updatedSeason);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// DELETE ONE (DELETE)
router.delete('/:idSeason', async (req, res) => {
    try {
        await Season.findByIdAndDelete(req.params.idSeason);
        res.json({ message: 'Season has been deleted' })
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


module.exports = router;