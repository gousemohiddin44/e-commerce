const initialState = {
    id:undefined,
}

export default function GetItemReducer(state=initialState,action){
    switch (action.type) {
        case 'GET_ID':
            return {id:action.payload}
        default:
            return state
    }
}