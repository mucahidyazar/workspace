const express = require('express');
const router = express.Router();
let Exercise = require('../models/exercise.model');

router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (err) {
        res.status(400).json('Error : ' + err);
    }
});

router.post('/add', async (req, res) => {
    const exercise = {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    }

    const newExercise = new Exercise(exercise);

    try {        
        await newExercise.save();
        res.status(201).json('NewExercise : ' + newExercise);
    } catch (err) {
        res.status(400).json('Error : ' + err );
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await Exercise.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json('Error : ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteExecise = await Exercise.findByIdAndDelete(req.params.id);
        res.json('The exercise deleted.');
    } catch (err) {
        res.json('Error : ' + err);
    }
});

router.post('/update/:id', async (req, res) => {
    
    const exercise = {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    }
    
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, exercise);
        res.status(200).json('The exercise updated');
    } catch (err) {
        res.status(400).json('Error : ' + err);
    }

});


module.exports = router;