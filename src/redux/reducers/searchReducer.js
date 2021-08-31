const initialState = {
    searchedItem: '',
}

const searchReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SEARCHED_ITEM':
            return {searchedItem:action.payload}
        default:
            return state
    }
};

export default searchReducer;