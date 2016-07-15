/**
 * Created by Okura on 12/07/2016.
 */

/*
 * Importamos las funciones createStore y combineReducers de redux
 * Estas nos permitiran combinar nuestros -reducers- y crear el -store-
 * */
import {createStore, combineReducers} from 'redux';

/*
* Importar los -reducers- de nuestra aplicacion
* */
import helloReducer from './reducers/hello';

// Combine Reducers
var reducers = combineReducers({
    hello: helloReducer
    // more if you want...
});

// Create Store
var store = createStore(
    reducers
);

export default store;
