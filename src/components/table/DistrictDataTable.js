import React from "react";
import "./DistrictData.css";

const DistrictData = ({ districtData }) => {
  return (
    <table className="district-table">
      <thead>
        <tr>
          <th>District</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(districtData).map((data, index) => {
          const accessData = districtData[data] || "";
          return (
            <>
              <tr key={index}>
                <td>{data}</td>
                <td>{accessData.confirmed}</td>
                <td>{accessData.active}</td>
                <td>{accessData.recovered}</td>
                <td>{accessData.deceased}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default DistrictData;
