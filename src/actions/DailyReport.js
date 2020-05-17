import axios from "axios";

export const FETCH_DAILY_REPORT_SUCCESS = "FETCH_DAILY_REPORT_SUCCESS";
export const FETCH_DAILY_REPORT_FAILURE = "FETCH_DAILY_REPORT_FAILURE";
export const FETCH_HOSPITAL_DATA_SUCCESS = "FETCH_HOSPITAL_DATA_SUCCESS";
export const FETCH_HOSPITAL_DATA_FAILURE = "FETCH_HOSPITAL_DATA_FAILURE";
export const FETCH_CONTACT_DATA_SUCCESS = "FETCH_CONTACT_DATA_SUCCESS";
export const FETCH_CONTACT_DATA_FAILURE = "FETCH_CONTACT_DATA_FAILURE";
export const FETCH_NOTIFICATION_DATA_SUCCESS =
  "FETCH_NOTIFICATION_DATA_SUCCESS";
export const FETCH_NOTIFICATION_DATA_FAILURE =
  "FETCH_NOTIFICATION_DATA_FAILURE";
export const FETCH_TESTING_DATA_SUCCESS = "FETCH_TESTING_DATA_SUCCESS";
export const FETCH_TESTING_DATA_FAILURE = "FETCH_TESTING_DATA_FAILURE";

const fetchDailyReportSuccess = data => {
  return {
    type: FETCH_DAILY_REPORT_SUCCESS,
    payload: data
  };
};

const fetchDailyReportFailure = err => {
  return {
    type: FETCH_DAILY_REPORT_FAILURE,
    error: err
  };
};

const fetchHospitalDataSuccess = data => {
  return {
    type: FETCH_HOSPITAL_DATA_SUCCESS,
    payload: data
  };
};

const fetchHospitalDataFailure = err => {
  return {
    type: FETCH_HOSPITAL_DATA_FAILURE,
    error: err
  };
};

const fetchContactDataSuccess = data => {
  return {
    type: FETCH_CONTACT_DATA_SUCCESS,
    payload: data
  };
};

const fetchContactDataFailure = err => {
  return {
    type: FETCH_CONTACT_DATA_FAILURE,
    error: err
  };
};

const fetchNotificationDataSuccess = data => {
  return {
    type: FETCH_NOTIFICATION_DATA_SUCCESS,
    payload: data
  };
};

const fetchNotificationDataFailure = err => {
  return {
    type: FETCH_NOTIFICATION_DATA_FAILURE,
    error: err
  };
};

const fetchTestingDataSuccess = data => {
  console.log("entered", data);
  return {
    type: FETCH_TESTING_DATA_SUCCESS,
    payload: data
  };
};

const fetchTestingDataFailure = err => {
  return {
    type: FETCH_TESTING_DATA_FAILURE,
    error: err
  };
};

export const fetchDailyReport = () => async dispatch => {
  axios
    .get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response => {
      const { data } = response.data;
      dispatch(fetchDailyReportSuccess(data));
    })
    .catch(err => {
      dispatch(fetchDailyReportFailure(err));
    });
};

export const fetchHospitalData = () => async dispatch => {
  axios
    .get("https://api.rootnet.in/covid19-in/hospitals/beds")
    .then(response => {
      const { data } = response.data;
      dispatch(fetchHospitalDataSuccess(data));
    })
    .catch(err => {
      dispatch(fetchHospitalDataFailure(err));
    });
};

export const fetchContactData = () => async dispatch => {
  axios
    .get("https://api.rootnet.in/covid19-in/contacts")
    .then(response => {
      const { data } = response.data;
      dispatch(fetchContactDataSuccess(data));
    })
    .catch(err => {
      dispatch(fetchContactDataFailure(err));
    });
};

export const fetchNotificationData = () => async dispatch => {
  axios
    .get("https://api.rootnet.in/covid19-in/notifications")
    .then(response => {
      const { data } = response.data;
      dispatch(fetchNotificationDataSuccess(data));
    })
    .catch(err => {
      dispatch(fetchNotificationDataFailure(err));
    });
};

export const fetchTestingData = () => async dispatch => {
  axios
    .get("https://api.rootnet.in/covid19-in/stats/testing/raw")
    .then(response => {
      const { data } = response.data;
      const len = data.length;
      const recentData = data.slice(len - 10, len);
      dispatch(fetchTestingDataSuccess(recentData));
    })
    .catch(err => {
      dispatch(fetchTestingDataFailure(err));
    });
};
