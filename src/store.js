import {compose,applyMiddleware, createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  authData: {}
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      console.log("SET state changed")
      return {...state, ...rest }
    case 'auth':
      console.log("auth state changed")
      return {...state, ...rest }
    default:
      return state
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);
const store = createStore(changeState, enhancer);

export default store

