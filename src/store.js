/**
 * Created by ashishmishra on 5/8/17.
 */
import { createStore, compose, applyMiddleware } from 'redux';


// reducer
import items from './reducer';

export default function configureStore() {
    return createStore(items);
}
