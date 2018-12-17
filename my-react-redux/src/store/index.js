import { createStore } from 'redux';
import reduces from './reduces'
const store = createStore(reduces,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;