import uuid from 'uuid';
import { ADD_EMOTIONS} from '../actions/types'


const initialState = {
            individualHappiness:'undefined',
            teamHappiness: 'undefined'
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_EMOTIONS:
            return {
               emotion: action.payload
            };
        default:
            return state;
    }
}