const initialState = {
    item : 0
}

function addItemReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_ITEM_TO_CART' :
            return {item : state.item + action.payload};
        default:
            return state;
    }
}

export default addItemReducer;