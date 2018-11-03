import * as TYPES from '../types/specials'

export const getTodaysSpecials = () => {
  return dispatch => {
    dispatch({type: TYPES.LOADING_SPECIALS})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/specials`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(JSONResponse => {
      dispatch({ type: TYPES.SET_SPECIALS, payload: JSONResponse })
      dispatch({ type: TYPES.LOADED_SPECIALS })
    })
    .catch(response => response.json().then(error => dispatch({type: TYPES.FAILED_LOADING_SPECIALS, payload: error})))
  }
}