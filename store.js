import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import pushReducer from './screens/push/reducers'

const appReducer = combineReducers({
  pushReducer,
})

// TODO: consolidate this
let middleware = []
middleware.push(thunk)

export default () => {
  let store = {}

  const enhancers = compose(
    applyMiddleware(...middleware)
  )

  store = createStore(
    appReducer,
    enhancers
  )

  return store
}
