import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, RouterContext, match, createMemoryHistory} from 'react-router';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import {syncHistoryWithStore} from 'react-router-redux';

import {Home} from './containers/index';
import reducerApp from './reducers';
import createStore from './store';

import list from './testData';                  //TEMP DATA

const App = (store,history) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}/>
        </Router>
    </Provider>
);

if ( typeof window !== 'undefined') {

    let initStore = window.__INITIAL_STATE__ || {};
    let store = createStore(undefined, initStore);
    const history = syncHistoryWithStore(browserHistory, store);

    delete window.__INITIAL_STATE__;               //Remove data and tag for security reasons
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

