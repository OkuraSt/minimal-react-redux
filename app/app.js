/*
* Dependencias declaradas:
* React para crear componentes
* ReactDom para renderizar en un nodo del Dom
* Objetos para manejar el ruteo.
* */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
// Componente principal de layout de la aplicacion
import App from 'layouts/app';

// Components
// Componentes para rutas de Home y Users
import Home from 'ui/home';
import Users from 'ui/users';

/*
* La funcion render de ReactDOm nos permite renderizar nuestros componentes,
* en un elemento especifico del DOM.
* Recordar que <Router> tambien es un componente y en este se especifican las rutas 
* y el componente hijo que se debe renderizar.
* Ejemplo: path="/users" component={Users}
* */
ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
        </Route>
    </Router>
), document.getElementById('root'));
