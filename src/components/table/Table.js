import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistrictReport } from "../../actions/DistrictReport";
import DistrictDataTable from "./DistrictDataTable";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import expand from "../../assets/images/expand.png";
import "./Table.css";

const Table = ({ regionaldata }) => {
  const dispatch = useDispatch();
  const state = useSelector(
    state => state && state.districtReport.districtData
  );
  const [districtData, setDistrictData] = useState("");
  const [distLocation, setDistLocation] = useState("");
  const [toggle, setToggle] = useState(false);

  const tableClickedHandler = location => {
    setToggle(!toggle);
    if (location !== distLocation) {
      dispatch(fetchDistrictReport());
    }

    for (let key in state) {
      if (location === key) {
        setDistrictData(state[key].districtData);
      } else if (location === "Telengana") {
        setDistrictData(state["Telangana"].districtData);
      } else if (location === "Dadar Nagar Haveli") {
        setDistrictData(
          state["Dadra and Nagar Haveli and Daman and Diu"].districtData
        );
      }
    }
    setDistLocation(location);
  };

  return (
    <table className="customers">
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {regionaldata &&
          regionaldata.map((data, index) => {
            const sliderClass = ["expand"];
            let isDisplay = false;
            if (distLocation === data.loc) {
              isDisplay = true;
            }
            if (isDisplay && toggle) {
              sliderClass.push("rotate");
            }
            const confirmed =
              data.confirmedCasesIndian + data.confirmedCasesForeign;
            const active = confirmed - data.discharged;
            return (
              <>
                <tr
                  key={index}
                  onClick={() => {
                    tableClickedHandler(data.loc);
                  }}
                >
                  <td>
                    <img
                      className={sliderClass.join(" ")}
                      style={{ paddingRight: "5px" }}
                      alt="expand"
                      height="10px"
                      width="10px"
                      src={expand}
                    />
                    {data.loc}
                  </td>
                  <td>{confirmed}</td>
                  <td>{active}</td>
                  <td>{data.discharged}</td>
                  <td>{data.deaths}</td>
                </tr>
                <TransitionGroup component={null}>
                  {isDisplay && toggle && (
                    <CSSTransition classNames="dialog" timeout={300}>
                      <DistrictDataTable districtData={districtData} />
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
