import React from "react";
import "./Table.css";

const ContactTable = ({ regionaldata }) => {
  return (
    <table className="customers">
      <thead>
        <tr>
          <th>State</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {regionaldata &&
          regionaldata.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.loc}</td>
                <td>{data.number}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ContactTable;
