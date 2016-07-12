/*
* & Imports
* Componente de layout inicial
* muestra una barra de navegacion a los links hole y Users
* ademas renderiza los componentes que se le agreguen como hijos.
* */
import React from 'react';
import { Link } from 'react-router';

/*
* & Export Default
* Exportamos el resultado de React CreateClass que sera el componente App
* */
export default React.createClass({
    render: function() {
        return (
            <div className="app">
                {/* Barra de Navegacion */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                </nav>
                {/* Aqui se montan los componentes de react router */}
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});
