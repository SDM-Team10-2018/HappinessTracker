import axios from 'axios';

export const addEmotions = (team, emotion1, emotion2) => dispatch => {

  // POST - Saving the Emotion data for Team Name, Individual Emotion and Team Emotion in DB
    axios.post('/api/emotions', {
        teamName: team,
        individualEmotion: emotion1,
        teamEmotion: emotion2
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   
}