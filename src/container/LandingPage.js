import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DailyData from "../container/DailyData/DailyData";
import HospitalData from "../container/HospitalData/HospitalData";
import ContactData from "../container/ContactData/ContactData";
import Navigation from "../components/navigation/Navigation";
import Notification from "../container/NotificationData/NotificationData";
import TestingData from "../container/TestData/TestData";
import Banner from "../components/Banner/Banner";
import BannerFoot from "../components/Banner/BannerFoot";
import ErrorComponent from "../components/Error/ErrorComponent";
import { Switch, Route } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const dailyDataError = useSelector(
    state => state.dailyData && state.dailyData.err
  );
  const districtDataError = useSelector(
    state => state.dailyData && state.districtReport.err
  );
  if (dailyDataError || districtDataError) {
    history.push("/error");
  }
  return (
    <>
      <Route component={Navigation} />
      <Banner />
      <Switch>
        <Route exact path="/" component={DailyData} />
        <Route exact path="/hospitals" component={HospitalData} />
        <Route exact path="/contacts" component={ContactData} />
        <Route exact path="/notifications" component={Notification} />
        <Route exact path="/tests" component={TestingData} />
        <Route exact path="/error" component={ErrorComponent} />
      </Switch>
      <BannerFoot />
    </>
  );
};

export default LandingPage;
