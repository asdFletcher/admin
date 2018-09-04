import { GET_USERS_SUCCESS, GET_USERS_FAILED } from "./actions";

const initialState = {
  allUsers: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        error: null
      };
    case GET_USERS_FAILED:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;