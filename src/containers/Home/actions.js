/**
 * Created by ashishmishra on 5/12/17.
 */
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';

export function addItem(item){
    return {
        type: ADD_ITEM,
        value:item
    };
}
export function getItems(){
    return {
        type: GET_ITEMS,
    };
}