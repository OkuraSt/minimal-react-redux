/*
 * Dependencias agregadas:
 * Provider de react-redux para conectar el store con los componentes react
 *
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from 'store';

// Layouts
import App from 'layouts/app';

// Components
import Home from 'ui/home';
import Users from 'ui/users';

/*
 * Se agrega el componente Provider como padre del router
 * y como prop se le envia el store
 * */
ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Home}/>
                <Route path="/users" component={Users}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
