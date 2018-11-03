import { combineReducers } from 'redux'
import restaurants from './restaurantsReducer'
import specials from './specialsReducer'

const rootReducer = combineReducers({
  restaurants,
  specials
})

export default rootReducer