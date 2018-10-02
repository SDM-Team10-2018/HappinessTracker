import { combineReducers } from 'redux';
import emotionReducer from './emotionReducer';

export default combineReducers({
  emotion : emotionReducer   
});