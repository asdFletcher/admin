import { makeConstant } from "../../utils";

const STATE_BRANCH = "SMSUSERS";

export const REQUEST_FAILED = makeConstant(STATE_BRANCH, 'REQUEST_FAILED');

export const REQUEST_TOTAL_USERS = makeConstant(STATE_BRANCH, 'REQUEST_TOTAL_USERS');
export const REQUEST_USERS_BY_STATE = makeConstant(STATE_BRANCH, 'REQUEST_USERS_BY_STATE');

export const RECEIVE_TOTAL_USERS = makeConstant(STATE_BRANCH, 'RECEIVE_TOTAL_USERS');
export const RECEIVE_USERS_BY_STATE = makeConstant(STATE_BRANCH, 'RECEIVE_USERS_BY_STATE');
