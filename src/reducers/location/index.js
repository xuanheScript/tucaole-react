import types from '../../constants/ActionTypes';
import { fetchStatus } from "ws-web-utils";



const initialState = {
    alphabetAddressData : null,
    allAddressData : [],
    pickerAllAddressData : [],
    allAddressDataFetchStatus : fetchStatus.l,
    locationInfo : null,
    userLocationInfo : null,
    userLocationInfoAreaChild : [],
}

export default function webIndex(state = initialState, action) {
    switch (action.type) {
        case types.location.SET_ALPHABET_ADDRESS_DATA:
            return Object.assign({}, state, {
                alphabetAddressData: action.data,
            })
        case types.location.SET_ALL_ADDRESS_DATA:
            return Object.assign({}, state, {
                allAddressData: action.data,
                pickerAllAddressData : action.pickerAllAddressData,
                allAddressDataFetchStatus : action.fetchStatus,
            })
        case types.location.SET_LOCATION_INFO:
            return Object.assign({}, state, {
                locationInfo: action.locationInfo,
            })
        case types.location.SET_USER_LOCATION_INFO:
            return Object.assign({}, state, {
                userLocationInfo: action.userLocationInfo,
                userLocationInfoAreaChild : action.userLocationInfoAreaChild,
            })
        default:
            return state;
    }
}
