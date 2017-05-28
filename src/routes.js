/**
 * Created by ashishmishra on 5/19/17.
 */
import React,{Component} from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {syncHistoryWithStore} from 'react-router-redux';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import {Header,Footer,Home,About} from './containers/index';

class Layout extends React.Component {


    componentDidMount() {

        window.onresize = function () {

            let headerHeight = document.querySelector("._js_main-header").clientHeight;
            let footerHeight = document.querySelector("._js_main-footer").clientHeight;
            let cssContainer = document.querySelector("._js_css-container");

            document.body.style.height = "calc(100% - " + headerHeight + "px)";
            document.body.style.paddingTop = headerHeight + "px";
            cssContainer.style.minHeight = "calc(100% - "+footerHeight+"px)";

        };

        window.onresize()

    }


    render() {

        return (
            <div className="css_main-container">
                <Header />
                <div className="css_container _js_css-container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );

    }
}


export default function (props = {}) {
    let history = browserHistory

    if (props.store) {
        history = syncHistoryWithStore(browserHistory, props.store)
    }

    return (
        <Router history={history}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Home} />
                <Route  path="about" component = { About }/>
            </Route>
        </Router>
    )
}

// const history = syncHistoryWithStore(browserHistory, store);
// const Routes = (
//    <Router history={history}>
//     <Route path="/" component={ Layout } >
//     <IndexRoute component = { Home }/>
//     <Route  path="about" component = { About }/>
//     </Route>
//    </Router>
// );
//
// export default Routes;