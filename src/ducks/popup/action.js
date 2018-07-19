import { CLOSE_POPOP, SHOW_POPUP } from './constant'

export const showPopup = componentKey => ({
  type: SHOW_POPUP,
  payload: componentKey,
})

export const closePopup = () => ({
  type: CLOSE_POPOP,
})
