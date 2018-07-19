import { all, put, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { INCREASE_SCORE_POINT, SELECT_SQUARE, START_GAME, STEP_TIMEOUT } from './constant'
import { closePopupSaga } from '../popup/saga'
import { showPopup } from '../popup/action'

export const checkForFinishSaga = function*() {
  const { totalGames, step } = yield select(({ easyGame }) => ({
    totalGames: easyGame.settings.totalGames,
    step: easyGame.game.step,
  }))

  try {
    if (step > totalGames) {
      yield put(showPopup('gameResult'))
    }
  } catch (error) {
    console.error(error)
  }
}

export const validateSelectedSquareSaga = function*(action) {
  const { rightChoice } = yield select(({ easyGame: { game: { color } } }) => ({
    rightChoice: color,
  }))

  if (rightChoice === action.payload) {
    yield put({
      type: INCREASE_SCORE_POINT,
    })
  }
}

export const stepTimeoutSaga = function*() {
  const { step, timePerGame, totalGames } = yield select(({ easyGame }) => ({
    step: easyGame.game.step,
    timePerGame: easyGame.settings.timePerGame,
    totalGames: easyGame.settings.totalGames,
  }))

  if (step > totalGames) {
    return
  }

  yield delay(timePerGame)

  const { nextStep } = yield select(({ easyGame: { game: { step } } }) => ({
    nextStep: step,
  }))

  if (step === nextStep) {
    yield put({
      type: STEP_TIMEOUT,
    })
  }
}

export const saga = function*() {
  yield all([
    takeEvery(SELECT_SQUARE, validateSelectedSquareSaga),
    takeEvery(SELECT_SQUARE, checkForFinishSaga),
    takeEvery(SELECT_SQUARE, stepTimeoutSaga),
    takeEvery(START_GAME, closePopupSaga),
    takeEvery(START_GAME, stepTimeoutSaga),
    takeEvery(STEP_TIMEOUT, stepTimeoutSaga),
    takeEvery(STEP_TIMEOUT, checkForFinishSaga),
  ])
}
