import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LineChart from "../../components/charts/LineChart";
import { fetchTestingData } from "../../actions/DailyReport";

const TestingData = () => {
  const dispatch = useDispatch();
  const testingData = useSelector(state => state.dailyReport.testingData);

  useEffect(() => {
    dispatch(fetchTestingData());
  }, [dispatch]);
  return (
    <div>
      <LineChart testsummary={testingData} />
    </div>
  );
};

export default TestingData;
