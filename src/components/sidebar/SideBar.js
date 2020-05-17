import React from "react";
import "./SideBar.css";

const SideBar = props => {
  return (
    <button className="sidebar" onClick={props.clicked}>
      ☰
    </button>
  );
};

export default SideBar;
