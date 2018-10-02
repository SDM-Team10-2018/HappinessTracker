import axios from 'axios';
import { ADD_EMOTIONS } from './types';
var querystring = require("querystring");

export const addEmotions = emotion => dispatch => {
    //return {
    //    type: ADD_EMOTIONS,
    //    payload: emotion
    //};


    axios.post('/api/emotions', {
        emotion: 'test'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   
}