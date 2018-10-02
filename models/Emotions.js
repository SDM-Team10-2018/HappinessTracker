const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmotionSchema = new Schema({
    emotion : {
        type : String,
        //required : true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = Emotion = mongoose.model('emotion', EmotionSchema);