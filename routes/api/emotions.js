const express = require('express');
const router = express.Router();

//Emotion Model
const Emotion = require('../../models/Emotions');

//Get Emotions
router.get('/', (req, res) => {
    Emotion.find()
        .sort({date: -1})
        .then(emotions => res.json(emotions))
});

//Post Emotion
router.post('/', (req, res) => {
    const newEmotion = new Emotion({
        emotion: req.body.emotion
    });

    newEmotion.save().then(emotion => res.json(emotion));
});
//Delete Emotion
router.delete('/:id', (req, res) => {
    Emotion.findById(req.params.id)
        .then(emotion => emotion.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});


module.exports = router;
