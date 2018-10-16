import { ADD_EMOTIONS} from '../actions/types'

// Setting the default values for emotions
const initialState = {
            individualHappiness:'undefined',
            teamHappiness: 'undefined'
}

//[Future Sprint] - Setting up for Redux
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