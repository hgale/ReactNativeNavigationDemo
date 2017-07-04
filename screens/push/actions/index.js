/**
 * Screen actions
 */
import t from './actionTypes'

/**
 * Regenerate data for all screens
 */
export function updateScreens () {
  return (dispatch) => {
    dispatch({
      type: t.UPDATE_SCREENS
    })
  }
}

/**
 * Push a new screen
 */
export function pushScreen () {
  return (dispatch) => {
    dispatch({
      type: t.PUSH_SCREEN
    })
  }
}

/**
 * Pop a screen
 */
export function popScreen () {
  return (dispatch) => {
    dispatch({
      type: t.POP_SCREEN
    })
  }
}
