/**
 * Created by ashishmishra on 5/8/17.
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';


// reducer

import reducer from './reducers';

export default function configureStore(reducerX = reducer,initState) {
    return  createStore(reducerX,initState);
}
