import { combineReducers } from 'redux';
import emotionReducer from './emotionReducer';

//[Future Sprint] - Setting up for Redux
export default combineReducers({
  emotion : emotionReducer   
});