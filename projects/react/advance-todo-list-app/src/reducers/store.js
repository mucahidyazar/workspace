import { createStore } from 'redux';
import reducers from './config';

const store = createStore(reducers);

export default store;