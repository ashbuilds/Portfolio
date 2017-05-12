import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, RouterContext, match, createMemoryHistory} from 'react-router'
import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'

import reducerApp from './reducers';
import createStoreReact from './store';
import list from './testData';                  //TEMP DATA
import {Home} from './containers/index';


const App = (store,history) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}/>
        </Router>
    </Provider>
);

if ( typeof window !== 'undefined') {

    let initStore = window.__INIT_STATE__ || {};
    let store = createStoreReact(undefined, initStore);
    const history = syncHistoryWithStore(browserHistory, store);

    delete window.__INIT_STATE__;               //Remove data and tag for security reasons
    document.getElementById("__DELETE_AFTER_RENDER__").remove();

    render(App(store,history), document.getElementById('root'));

}

export default function doRender() {             //Server side Rendering

    const store = createStore(reducerApp, {data: {list: list}});
    const history = syncHistoryWithStore(createMemoryHistory(), store);
    const html = renderToString(App(store,history));
    const finalState = store.getState();

    return {html, finalState};

}

