const express = require('express');
const router = express.Router();

const Episode = require('../models/Episode');

// GET ALL
router.get('/', async (req, res) => {
    try {
        const episodes = await Episode.find({
            show: req.params.idShow,
            season: req.params.idSeason
        });
        res.json(episodes);
    }
    catch (e) {res.json({ message: e })};
});

// GET ONE
router.get('/:idEp', async (req, res) => {
    try {
        const episode = await Episode.findById(req.params.idEp);
        if (!episode) return res.status(404).send('Episode not found');
        res.json(episode);
    }
    catch (e) {res.json({ message: e });}
});

// CREATE ONE POST
router.post('/', async (req, res) => {
    const episode = new Episode({
        title: req.body.title,
        show: req.params.idShow,
        season: req.params.idSeason
    });
    try {
        const savedEpisode = await episode.save();
        res.json(savedEpisode);
    }
    catch (e) {res.json({ message: e });}
});


// UPDATE ONE (PUT)
router.put('/:idEp', async (req, res) => {
    try {
        const updatedEp = await Episode.findByIdAndUpdate(req.params.idEp, req.body, {new: true});
        res.json(updatedEp);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// UPDATE ONE (PATCH)
router.patch('/:idEp', async (req, res) => {
    try {
        const updatedEp = await Episode.findByIdAndUpdate(req.params.idEp, req.body, {new: true});
        res.json(updatedEp);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// DELETE ONE (DELETE)
router.delete('/:idEp', async (req, res) => {
    try {
        await Episode.findByIdAndDelete(req.params.idEp);
        res.json({ message: 'Episode has been deleted' })
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


module.exports = router;