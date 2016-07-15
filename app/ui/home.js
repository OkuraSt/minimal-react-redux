import React, {Component, PropTypes} from 'react';
/*
 * Dependencias agregadas:
 * - connect de react redux, nos ayuda a ligar estado y
 * acciones con nuestro componente
 * - hello_action de nuestro reducer hello
 * */
import {connect} from 'react-redux';
import {hello_action} from '../reducers/hello';


/*
 * "Conectamos" nuestro componente Home
 * Primero pasamos la variable message desde el state como props
 * y tambien pasamos la funcion hello_action
 * */
@connect(
    state => ({message: state.hello.message}),
    {hello_action}
)
export default class Home extends Component {
    /*
     * Agregamos validaicon para nuestros props
     * */
    static propTypes = {
        message: PropTypes.string.isRequired,
        hello_action: PropTypes.func.isRequired
    };

    /*
     * Esta sera la funcion que maneja el evento click
     * */
    click_hello = () => {
        const {hello_action} = this.props;
        hello_action();
    };

    render() {
        const {message} = this.props;

        return (
            <div>
                <h1>App: Home</h1>
                {/* Agregamos nuestro prop message */}
                <h2>{message}</h2>
                {/* Agregamos un boton que ejecutara la accion hello_action */}
                <input type="button" onClick={this.click_hello} value="Say Hello"/>
            </div>
        );
    }
}
