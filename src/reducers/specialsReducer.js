const initialState = {
  specials: [],
  selectedSpecial: null,
}

export default function specialsReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return Object.assign({}, state, {
        selectedSpecial: action.payload
      })
    default:
      return state
  }
}