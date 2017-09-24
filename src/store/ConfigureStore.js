import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/Index';
import {createBrowserHistory} from 'history'
import { routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,routerMiddleware(history))(createStore);

const initialState = {

}

const store = createStoreWithMiddleware(rootReducer, initialState);


export default store
