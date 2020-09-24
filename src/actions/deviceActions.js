import { deviceConstants } from "../constants";
import { history } from "../helpers";

export const deviceActions = {
    fetchDevices
};

function fetchDevices() {
    return dispatch => {
        console.log("FetchDevices Dispatched");
        //Mocking code

        // var Reader = { index: 0, name: "HID Global Crescendo Key 0", atr: "3BD996FF8191FE1FC343323330302D4B4559BA" };
        // var respon = [];
        // respon.push(Reader);
        // dispatch(success(respon));
        
        fetchReaders().then(
            resp => {
                dispatch(success(resp));
            },
            error => {
                dispatch(failure(error));
            }
        )
    };
}

async function fetchReaders() {
    const response = await navigator.webcard.readers();
    return response;
}

function success(response) {
    return {
        type: deviceConstants.READERS_SUCCESS,
        response
    };
}

function failure(error) {
    return {
        type: deviceConstants.READERS_FAILURE,
        error
    };
}