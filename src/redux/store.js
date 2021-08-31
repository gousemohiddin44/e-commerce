import {createStore} from 'redux';
import allreducer from './reducers';

const store = createStore(allreducer);

export default store;