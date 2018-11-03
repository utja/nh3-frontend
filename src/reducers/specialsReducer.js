import * as TYPES from '../types/specials'

const initialState = {
  specials: [],
  selectedSpecial: null,
  loadingSpecials: false,
}

export default function specialsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOADING_SPECIALS:
      return {...state, loadingSpecials: true}
    case TYPES.SET_SPECIALS:
      return {...state, specials: action.payload}
    case TYPES.LOADED_SPECIALS:
      return {...state, loadingSpecials: false}
    default:
      return state
  }
}