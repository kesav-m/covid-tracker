import {
  FETCH_DAILY_REPORT_SUCCESS,
  FETCH_DAILY_REPORT_FAILURE,
  FETCH_HOSPITAL_DATA_SUCCESS,
  FETCH_HOSPITAL_DATA_FAILURE,
  FETCH_CONTACT_DATA_SUCCESS,
  FETCH_CONTACT_DATA_FAILURE,
  FETCH_NOTIFICATION_DATA_SUCCESS,
  FETCH_NOTIFICATION_DATA_FAILURE,
  FETCH_TESTING_DATA_SUCCESS,
  FETCH_TESTING_DATA_FAILURE
} from "../actions/DailyReport";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DAILY_REPORT_SUCCESS:
      return {
        ...state,
        dailyData: action.payload
      };
    case FETCH_DAILY_REPORT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_HOSPITAL_DATA_SUCCESS:
      return {
        ...state,
        hospitalData: action.payload
      };
    case FETCH_HOSPITAL_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_CONTACT_DATA_SUCCESS:
      return {
        ...state,
        contactData: action.payload
      };
    case FETCH_CONTACT_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_NOTIFICATION_DATA_SUCCESS:
      return {
        ...state,
        notificationData: action.payload
      };
    case FETCH_NOTIFICATION_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_TESTING_DATA_SUCCESS:
      return {
        ...state,
        testingData: action.payload
      };
    case FETCH_TESTING_DATA_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
