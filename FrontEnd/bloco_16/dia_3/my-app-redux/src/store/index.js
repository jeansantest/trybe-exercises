import { createStore } from 'redux';
import rootReducer from '../reducers/index';

/* eslint-disable no-underscore-dangle */
// const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
