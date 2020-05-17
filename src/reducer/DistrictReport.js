import {
  FETCH_DISTRICT_REPORT_SUCCESS,
  FETCH_DISTRICT_REPORT_FAILURE
} from "../actions/DistrictReport";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DISTRICT_REPORT_SUCCESS:
      return {
        ...state,
        districtData: action.payload
      };
    case FETCH_DISTRICT_REPORT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
