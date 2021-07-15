import {SIGNIN, SIGNOUT} from '../actions/types'
const INITIAL_STATE = {
    isSignedIn: null
}
const googleAuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGNIN:
            return {...state, isSignedIn: true}

        case SIGNOUT:
            return {...state, isSignedIn: false}
        
        default:
            return state;
    }
}

export default googleAuthReducer;