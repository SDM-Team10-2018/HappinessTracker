const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Setting up the Schema for the MongoDB collection for saving emotion information
const EmotionSchema = new Schema({
    teamName : {
        type : String
    },
    individualEmotion : {
        type : String
    },
    teamEmotion : {
        type : String
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Emotion = mongoose.model('emotions', EmotionSchema);