import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, RouterContext, match, createMemoryHistory,IndexRoute} from 'react-router';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import {syncHistoryWithStore} from 'react-router-redux';

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import {Header,Footer,Home,About,Propan} from './containers/index';
import reducerApp from './reducers';
//import Routes from './routes';
import createStore from './store';

import list from './testData';                  //TEMP DATA

class Layout extends React.Component {


    componentDidMount() {

        // window.onresize = function () {
        //
        //     let headerHeight = document.querySelector("._js_main-header").clientHeight;
        //     let footerHeight = document.querySelector("._js_main-footer").clientHeight;
        //     let cssContainer = document.querySelector("._js_css-container");
        //
        //     document.body.style.height = "calc(100% - " + headerHeight + "px)";
        //     document.body.style.paddingTop = headerHeight + "px";
        //     cssContainer.style.minHeight = "calc(100% - "+footerHeight+"px)";
        //
        // };
        //
        // window.onresize()

    }


    render() {

        return (
            <div className="css_main-container">
                {/*<Header />*/}
                 <div className="css_container _js_css-container">
                     {this.props.children}
                 </div>
                {/*<Footer />*/}
            </div>
        );

    }
}



const App = (store,history) => (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ Layout } >
                <IndexRoute component = { Home }/>
                {/*<Route  path="about" component = { About }/>*/}
                <Route  path="propan" component = { Propan }/>
                {/*<routing not working when disabled javascript/>*/}
            </Route>
        </Router>
    </Provider>
);

if ( typeof window !== 'undefined') {

    let initStore = window.__INITIAL_STATE__ || {};
    let store = createStore(reducerApp, initStore);

    const history = syncHistoryWithStore(browserHistory, store);

    delete window.__INITIAL_STATE__;               //Remove data and tag for security reasons
    document.getElementById("__DELETE_AFTER_RENDER__").remove();

    render(App(store,history), document.getElementById('root'));

}

export default function doRender() {             //Server side Rendering

    const store = createStore(reducerApp, {data: {list: list}});
    const history = createMemoryHistory();
    const html = renderToString(App(store,history));
    const finalState = store.getState();

    return {html, finalState};

}

