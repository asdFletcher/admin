import {
  makeConstant
} from "../../utils";
const STATE_BRANCH = 'SELECTIONS';

export const CHANGE_EVENTS_TAB = "CHANGE_EVENTS_TAB";
export const CHANGE_FEDERAL_STATE_RADIO = "CHANGE_FEDERAL_STATE_RADIO";
export const GET_URL_HASH = "GET_URL_HASH";
export const GET_URL_HASH_SUCCESS = "GET_URL_HASH_SUCCESS";
export const SELECTION_REQUEST_FAILED = "SELECTION_REQUEST_FAILED";
export const CHANGE_FEDERAL_STATE_RADIO_OLD_EVENT = "CHANGE_FEDERAL_STATE_RADIO_OLD_EVENT";
export const CHANGE_DATE_LOOKUP = "CHANGE_DATE_LOOKUP";
export const CHANGE_STATE_FILTERS = "CHANGE_STATE_FILTERS";
export const TOGGLE_INCLUDE_LIVE_EVENTS = "TOGGLE_INCLUDE_LIVE_EVENTS";
export const CHANGE_MODE = "CHANGE_MODE";
export const CHANGE_MOC_END_POINT = makeConstant(STATE_BRANCH, "CHANGE_MOC_END_POINT");
export const SET_TEMP_ADDRESS = makeConstant(STATE_BRANCH, "SET_TEMP_ADDRESS");
export const GEOCODE_TEMP_ADDRESS = makeConstant(STATE_BRANCH, "GEOCODE_TEMP_ADDRESS");
export const GENERAL_FAIL = makeConstant(STATE_BRANCH, "GENERAL_FAIL");
export const CHANGE_TIME_ZONE = makeConstant(STATE_BRANCH, "CHANGE_TIME_ZONE");
export const CHANGE_TIME_ZONE_SUCCESS = makeConstant(STATE_BRANCH, "CHANGE_TIME_ZONE_SUCCESS");
export const SET_START_TIME = makeConstant(STATE_BRANCH, "SET_START_TIME");
export const SET_END_TIME = makeConstant(STATE_BRANCH, "SET_END_TIME");
export const SET_DATE = makeConstant(STATE_BRANCH, "SET_DATE");
export const SET_TIME_ZONE = makeConstant(STATE_BRANCH, "SET_TIME_ZONE");
export const CLEAR_ADDRESS = makeConstant(STATE_BRANCH, "CLEAR_ADDRESS");