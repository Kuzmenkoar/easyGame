import { Record } from 'immutable'
import { combineReducers } from 'redux'
import {
  CHANGE_COLOR,
  INCREASE_SCORE_POINT,
  SELECT_SQUARE,
  START_GAME,
  STEP_TIMEOUT,
} from './constant'

export const moduleName = 'easyGame'
export const SETTINGS = 'settings'
export const GAME = 'game'
export const RESULT = 'result'

const initialState = {
  [SETTINGS]: Record({
    totalGames: 10,
    timePerGame: 1000,
  }),
  [GAME]: Record({
    step: 0,
    color: 'red',
  }),
  [RESULT]: Record({
    rightChoices: 0,
  }),
}

function settingsReducer(state = new initialState[SETTINGS](), action) {
  const { type, payload } = action

  switch (type) {
    case START_GAME:
      return state.merge(payload)

    default:
      return state
  }
}

function gameReducer(state = new initialState[GAME](), action) {
  const { type, payload } = action

  switch (type) {
    case START_GAME:
      return state.set('step', 1)

    case STEP_TIMEOUT:
    case SELECT_SQUARE:
      return state.set('step', state.get('step') + 1)

    case CHANGE_COLOR:
      return state.set('color', payload)

    default:
      return state
  }
}

function resultReducer(state = new initialState[RESULT](), action) {
  const { type } = action

  switch (type) {
    case INCREASE_SCORE_POINT:
      return state.set('rightChoices', state.get('rightChoices') + 1)
    case START_GAME:
      return state.set('rightChoices', 0)

    default:
      return state
  }
}

export default combineReducers({
  [SETTINGS]: settingsReducer,
  [GAME]: gameReducer,
  [RESULT]: resultReducer,
})
