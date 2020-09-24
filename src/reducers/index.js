import { combineReducers } from 'redux';
import {transmitData} from "./transmitReducer";
import {listOfDevices} from "./listReducer";

const rootReducer = combineReducers({
    transmitData,
    listOfDevices,
  });
  
  export default rootReducer;