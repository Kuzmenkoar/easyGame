import { SELECT_SQUARE, START_GAME } from './constant'

export const startGame = () => ({
  type: START_GAME,
})

export const selectSquare = selectedColor => ({
  type: SELECT_SQUARE,
  payload: selectedColor,
})
