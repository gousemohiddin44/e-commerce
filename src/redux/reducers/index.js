import {combineReducers} from 'redux'
import addItemReducer from './addItemReducer';
import searchReducer from './searchReducer';

const allreducers = combineReducers({
    addItemToCart:addItemReducer,
    searchItem:searchReducer
});

export default allreducers;