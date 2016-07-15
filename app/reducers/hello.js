/**
 * Created by Okura on 12/07/2016.
 *
 * Ejemplo de reducer
 */

/*
 * Podemos inicializar nuestro -reducer- con un objeto
 * */
const initialState = {
    message: ""
};

/*
 * Este se especifica como primer parametro de nuestro reduces
 * state = initialState
 * Exportamos nuestro -reducer- que es una funcion que recibe el estado
 * y una accion al llamarse
 * */
export default function (state = initialState, action) {
    /*
    * El reducer despacha acciones por su tipo, el tipo de la accion puede
    * declararse tambien como una constante.
    * */
    switch (action.type) {
        case 'HELLO_WORLD':
            return {
                ...state,
                message: "Hola Mundo"
            };
        default:
            return state;
    }
}

export function hello_action() {
    return {
        type: 'HELLO_WORLD'
    }
}
