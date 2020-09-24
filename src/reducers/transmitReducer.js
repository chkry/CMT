import { deviceConstants } from '../constants';

const initialState = {};

export function transmitData(state = initialState, action) {
  switch (action.type) {
    case deviceConstants.APPROVE_REQUEST:
      return {
        approveStatus: true,
        authID: action.user
      };
    case deviceConstants.APPROVE_SUCCESS:
      return {
        approveStatus: true,
        authID: action.user
      };
    case deviceConstants.APPROVE_FAILURE:
      return {
          approveStatus:false
      };
    case deviceConstants.APPROVE_RESET:
      return {
          approveStatus:false
      };
    default:
      return state
  }
}