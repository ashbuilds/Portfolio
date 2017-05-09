/**
 * Created by ashishmishra on 5/8/17.
 */

import list from './testData';


// reducer
const items = function(state = {list:[]},action) {

    switch (action.type){
        case 'ADD_ITEM':
            let newState =  state.list.concat([action.value])
            return Object.assign({}, state, {list:newState});
        case 'GET_ITEMS':
            return Object.assign({}, state, {list:list});
        default:
            return state;
    }


};

export default items;