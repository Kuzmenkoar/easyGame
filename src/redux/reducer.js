import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authorizationReducer, { moduleName as authorization } from '../ducks/authorization'
import peopleReducer, { moduleName as people } from '../ducks/people'

export default combineReducers({
  form,
  [authorization]: authorizationReducer,
  [people]: peopleReducer,
})
