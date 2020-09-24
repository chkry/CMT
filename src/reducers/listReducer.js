import { deviceConstants } from '../constants';

const initialState = { deviceList: "" };

export function listOfDevices(state = initialState, action) {
    switch (action.type) {
        case deviceConstants.READERS_REQUEST:
            return {
                deviceList: ""
            };
        case deviceConstants.READERS_SUCCESS:
            return {
                deviceList: action.response
            };
        case deviceConstants.READERS_FAILURE:
            return {
                deviceList: action.response
            };
        default:
            return state;
    }
}