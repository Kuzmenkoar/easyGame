import { SELECT_SQUARE, START_GAME } from './constant'

export const startGame = form => {
  return {
    type: START_GAME,
    payload: form,
  }
}

export const selectSquare = selectedColor => ({
  type: SELECT_SQUARE,
  payload: selectedColor,
})
