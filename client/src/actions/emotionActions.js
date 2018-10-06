import axios from 'axios';
import { ADD_EMOTIONS } from './types';
var querystring = require("querystring");

export const addEmotions = (emotion,emotion2) => dispatch => {
    //return {
    //    type: ADD_EMOTIONS,
    //    payload: emotion
    //};


    axios.post('/api/emotions', {
        emotion: emotion
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   
}