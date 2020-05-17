import axios from "axios";

export const FETCH_DISTRICT_REPORT_SUCCESS = "FETCH_DISTRICT_REPORT_SUCCESS";
export const FETCH_DISTRICT_REPORT_FAILURE = "FETCH_DISTRICT_REPORT_FAILURE";

const fetchDistrictReportSuccess = data => {
  return {
    type: FETCH_DISTRICT_REPORT_SUCCESS,
    payload: data
  };
};

const fetchDistrictReportFailure = err => {
  return {
    type: FETCH_DISTRICT_REPORT_FAILURE,
    error: err
  };
};

export const fetchDistrictReport = () => async dispatch => {
  axios
    .get("https://api.covid19india.org/state_district_wise.json")
    .then(response => {
      const { data } = response;

      dispatch(fetchDistrictReportSuccess(data));
    })
    .catch(err => {
      dispatch(fetchDistrictReportFailure(err));
    });
};
