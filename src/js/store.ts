import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer  from './reducers';

const composeEnhancers = composeWithDevTools({});

let store = () => (
  process.env.ENV === 'production'
  ? createStore(
    reducer
  )
  : createStore(
    reducer,
    composeEnhancers()
  )
)

export default store;