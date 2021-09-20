export function addItem(count){
    return {
        type:'ADD_ITEM_TO_CART',
        payload:count
    }
};

export function searchItem(item){
    return {
        type:'SEARCHED_ITEM',
        payload:item
    }
}

export function getItem(id){
    return {
        type:'GET_ID',
        payload:id
    }
}