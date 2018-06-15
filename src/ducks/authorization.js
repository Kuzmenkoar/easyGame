import {Record} from 'immutable';
import {all, put, take} from 'redux-saga/effects'

export const moduleName = 'authorization';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

const ReducerRecord = Record({
    user: null,
    loading: null,
    error: null,
})

export default function reducer (state = new ReducerRecord(), action) {
    const { type, payload, error } = action;

    switch (type) {
        case SIGN_IN_REQUEST: 
            return state
                .set('loading', true)
        case SIGN_IN_SUCCESS:
            return state
                .set('user', payload)
                .set('loading', false)
        case SIGN_IN_ERROR: 
            return state
                .set('error', error)
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

export const signInSaga = function * () {
    while (true) {
        const action = yield take(SIGN_IN_REQUEST)

        try {
            yield put({
                type: SIGN_IN_SUCCESS,
                payload: {
                    user: action.payload.login,
                    date: Date.now()
                }
            })
        } catch (error) {
            yield put({
                type: SIGN_IN_ERROR,
                error
            })
        }
    }
}

export const saga = function * () {
    yield all([
        signInSaga(),
    ])
}