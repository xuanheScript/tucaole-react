import {stateHoc} from 'ws-web-utils';
import {
    LoadingView,
    FailureView,
    ErrorView,
    NullDataView,
} from '../component/fetchView';

const ThisModule = (params = {})=>{
    return stateHoc(Object.assign({},{
        LoadingView,
        FailureView,
        ErrorView,
        NullDataView,
    },params))
}


export default ThisModule
