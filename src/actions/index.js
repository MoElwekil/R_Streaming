import stream from '../apis/stream'
import {SIGNIN, SIGNOUT, STREAMS_LIST,STREAM_CREATE,STREAM_DELETE,STREAM_EDIT,STREAM_SHOW} from './types'

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

    dispatch({type: STREAM_CREATE, payload: response.data})
}

export const streamEdit = (id, formValues) => async(dispatch) => {
    const response = await stream.put(`/stream/${id}`, formValues)

    dispatch({ type: STREAM_EDIT, payload: response.data})
}

export const streamDelete = (id) => async(dispatch) => {
    await stream.delete(`/stream/${id}`)

    dispatch({ type: STREAM_DELETE})
}

export const streamsList = () => async(dispatch) => {
    const response = await stream.get('/stream');

    dispatch({ type: STREAMS_LIST, payload: response.data})
}

export const streamShow = (id) => async(dispatch) => {
    const response = await stream.get(`/stream/${id}`)
}