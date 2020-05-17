import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyReport } from "../../actions/DailyReport";
import Table from "../../components/table/Table";
import Card from "../../components/card/Card";

const DailyData = () => {
  const dispatch = useDispatch();
  const reportData = useSelector(state => state.dailyReport.dailyData);
  const { regional } = reportData || "";
  const summary = (reportData && reportData["unofficial-summary"]) || "";

  useEffect(() => {
    dispatch(fetchDailyReport());
  }, [dispatch]);
  return (
    <>
      <Card summary={summary} />
      <Table regionaldata={regional} />
    </>
  );
};

export default DailyData;
