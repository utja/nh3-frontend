const initialState = {
  restaurants: [],
  selectedRestaurant: null,
}

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return Object.assign({}, state, {
        selectedRestaurant: action.payload
      })
    default:
      return state
  }
}