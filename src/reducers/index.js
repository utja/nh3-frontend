import { combineReducers } from 'redux'
import restaurantsReducer from './restaurantsReducer'
import specialsReducer from './specialsReducer'

const rootReducer = combineReducers({
  restaurantsReducer,
  specialsReducer
})

export default rootReducer