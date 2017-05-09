/**
 * Created by ashishmishra on 5/8/17.
 */
import axios from 'axios';

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

// export function saveItem(info, expire) {
//     return dispatch => {
//         axios.post('/api/item', { info, expire })
//             .then(
//                 success => dispatch(addItem(success.data)),
//                 failure => console.error(failure)
//             );
//     };
// }