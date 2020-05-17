import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HospitalCard from "../../components/card/HospitalCard";
import { fetchHospitalData } from "../../actions/DailyReport";

const HospitalData = () => {
  const dispatch = useDispatch();
  const hospitalData = useSelector(state => state.dailyReport.hospitalData);
  const { summary, regional } = hospitalData || "";

  useEffect(() => {
    dispatch(fetchHospitalData());
  }, [dispatch]);
  return <HospitalCard summary={summary} regional={regional} />;
};

export default HospitalData;
