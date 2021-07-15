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