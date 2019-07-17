import { 
  REQUEST_TOTAL_USERS,
  REQUEST_USERS_BY_STATE,
} from "./constants";

export const requestTotalCount = () => ({
  type: REQUEST_TOTAL_USERS,
});

export const requestSmsUsersByState = () => ({
  type: REQUEST_USERS_BY_STATE,
});
