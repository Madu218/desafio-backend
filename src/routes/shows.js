const express = require('express');
const router = express.Router();

const Show = require('../models/Show');


// GET ALL
router.get('/', async (_, res) => {
    try {
      const series = await Show.find();
      res.json(series);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// GET ONE
router.get('/:idShow', async (req, res) => {
    try {
        const series = await Show.findById(req.params.idShow);
        if (!series) return res.status(404).json({ message: 'Show not found' });
        res.json(series);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// CREATE ONE (POST)
router.post('/', async (req, res) => {
    const show = new Show({
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        ratings: req.body.ratings ? req.body.ratings : null
    });
    try {
        const savedShow = await show.save();
        res.json(savedShow);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// UPDATE ONE (PUT)
router.put('/:idShow', async (req, res) => {
    try {
        const updatedShow = await Show.findByIdAndUpdate(req.params.idShow, req.body, {new: true});
        res.json(updatedShow);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// UPDATE ONE (PATCH)
router.patch('/:idShow', async (req, res) => {
    try {
        const updatedShow = await Show.findByIdAndUpdate(req.params.idShow, req.body, {new: true});
        res.json(updatedShow);
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


// DELETE ONE (DELETE)
router.delete('/:idShow', async (req, res) => {
    try {
        await Show.findByIdAndDelete(req.params.idShow);
        res.json({ message: 'Show has been deleted' })
    }
    catch (e) {res.status(500).json({ message: e.message })};
});


module.exports = router;