const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmotionSchema = new Schema({
    teamName : {
        type : String,
        //required : true
    },
    individualEmotion : {
        type : String,
        //required : true
    },
    teamEmotion : {
        type : String,
        //required : true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Emotion = mongoose.model('emotions', EmotionSchema);