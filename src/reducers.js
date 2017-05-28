/**
 * Created by ashishmishra on 5/8/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



// reducer
const items = function(state={list:[]},action = {}) {

    switch (action.type){
        case 'ADD_ITEM':
            console.log("in add item  : ",state);
            let newState =  state.list.concat([action.value]);
            return Object.assign({}, state, {list:newState});
        case 'GET_ITEMS':
            return state;
        default:
            return state;
    }

};
const reducerX = combineReducers({
    data:items,
    routing: routerReducer
});

export default reducerX;