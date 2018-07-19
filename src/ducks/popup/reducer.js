import { Record } from 'immutable'
import { CLOSE_POPOP, SHOW_POPUP } from './constant'

export const COMPONENT_KEY = 'componentKey'
export const moduleName = 'popup'

const ReducerRecord = Record({
  [COMPONENT_KEY]: null,
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action

  switch (type) {
    case CLOSE_POPOP:
      return state.set(COMPONENT_KEY, null)
    case SHOW_POPUP:
      return state.set(COMPONENT_KEY, payload)
    default:
      return state
  }
}
