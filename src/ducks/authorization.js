import {Record} from 'immutable';

export const moduleName = 'authorization';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'

const ReducerRecord = Record({
    user: null,
    loading: null,
    error: null,
})

export default function reducer (state = new ReducerRecord(), action) {
    const { type, payload } = action;

    switch (type) {
        case SIGN_IN_REQUEST: 
            return state
                .set('user', payload.login)
        default:
            return state        
    }
}

export const signIn = (login, password) => {
    return {
        type: SIGN_IN_REQUEST,
        payload: {login, password}
    }
}