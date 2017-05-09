import React from 'react';
import { render } from 'react-dom';
import Welcome from './component/index';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                 <Welcome />
            </Provider>
        )
    }

}

render(<App />,document.getElementById('root'));




