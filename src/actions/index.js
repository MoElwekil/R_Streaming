import stream from '../apis/stream'
import {SIGNIN, SIGNOUT} from './types'

export const signIn = () => {
    return {
        type: SIGNIN
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT
    }
}

export const createStream = (formValues) => async (dispatch) => {
    const response = stream.post('/stream', formValues);

    dispatch({type: 'CREATE_STREAM', payload: response.data})
}