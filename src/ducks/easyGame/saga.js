import { all, put, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  CHANGE_COLOR,
  INCREASE_SCORE_POINT,
  SELECT_SQUARE,
  START_GAME,
  STEP_TIMEOUT,
} from './constant'
import { closePopupSaga } from '../popup/saga'
import { showPopup } from '../popup/action'

export const checkForFinishSaga = function*() {
  const { totalGames, step } = yield select(({ easyGame }) => ({
    totalGames: easyGame.settings.totalGames,
    step: easyGame.game.step,
  }))

  if (step > totalGames) {
    yield put(showPopup('gameResult'))
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

const possibleColors = ['red', 'blue', 'green']

export const changeColorSaga = function*() {
  const { currentColor } = yield select(({ easyGame: { game: { color } } }) => ({
    currentColor: color,
  }))

  const randomIndex = Math.floor(Math.random() * 2)
  const nextColor = possibleColors.filter(el => el !== currentColor)[randomIndex]

  yield put({
    type: CHANGE_COLOR,
    payload: nextColor,
  })
}

export const saga = function*() {
  yield all([
    takeEvery(SELECT_SQUARE, validateSelectedSquareSaga),
    takeEvery([SELECT_SQUARE, STEP_TIMEOUT], checkForFinishSaga),
    takeEvery([SELECT_SQUARE, START_GAME, STEP_TIMEOUT], stepTimeoutSaga),
    takeEvery([SELECT_SQUARE, START_GAME, STEP_TIMEOUT], changeColorSaga),
    takeEvery(START_GAME, closePopupSaga),
  ])
}
