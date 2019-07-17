import { 
  RECEIVE_TOTAL_USERS,
  RECEIVE_USERS_BY_STATE,
  REQUEST_FAILED,
} from "./constants";

const initialState = {
  totalSmsUsers: 0,
  smsUsersByState: {},
};

const smsUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_TOTAL_USERS:
      return {
        ...state,
        totalSmsUsers: payload,
      };
    case RECEIVE_USERS_BY_STATE:
      return {
        ...state,
        smsUsersByState: payload,
      };
    case REQUEST_FAILED:
        console.log(`SMS_USER_REQUEST_FAILED: ${payload}`);
        return {
          ...state,
          error: payload
        };
    default:
      return state;
  }
};

export default smsUserReducer;