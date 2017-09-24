import {combineReducers} from 'redux';
import location from './location/index';
import userIndex from './user/index';
import settingIndex from './setting';
import homeIndex from './home';
import appInitial from './app';
import { routerReducer } from 'react-router-redux'



const rootReducer = combineReducers({
    app : combineReducers({
        location,
        user : userIndex,
        appInitial,
        settingIndex,
    }),
    auth : combineReducers({
        location
    }),
    view : combineReducers({
        homeIndex,
    }),
    router: routerReducer
});

export default rootReducer;
