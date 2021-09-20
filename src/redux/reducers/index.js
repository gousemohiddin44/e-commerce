import {combineReducers} from 'redux'
import addItemReducer from './addItemReducer';
import GetItemReducer from './getItemReducer';
import searchReducer from './searchReducer';

const allreducers = combineReducers({
    addItemToCart:addItemReducer,
    searchItem:searchReducer,
    getProduct:GetItemReducer
});

export default allreducers;