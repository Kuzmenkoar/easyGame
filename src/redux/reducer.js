import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import popupReducer, { moduleName as popup } from '../ducks/popup/reducer'
import easyGameReducer, { moduleName as easyGame } from '../ducks/easyGame/reducer'

export default combineReducers({
  form,
  [popup]: popupReducer,
  [easyGame]: easyGameReducer,
})
