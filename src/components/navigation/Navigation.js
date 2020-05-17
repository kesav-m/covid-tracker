import React, { useState } from "react";
import SideBar from "../sidebar/SideBar";
import NavElements from "../navelements/NavElements";
import "./Navigation.css";

const Navigation = () => {
  const navclass = ["navbar"];

  const [toggle, setToggle] = useState(false);
  if (!toggle) {
    navclass.push("Close");
  }

  const sideBarClicked = () => {
    setToggle(true);
  };
  const backdropClicked = () => {
    setToggle(false);
  };
  const navElementClicked = () => {
    setToggle(false);
  };
  return (
    <div style={{ height: "50px" }}>
      <div className={navclass.join(" ")}>
        <NavElements
          clicked={() => {
            navElementClicked();
          }}
        />
      </div>
      {toggle ? (
        <>
          <div className="backdrop" onClick={() => backdropClicked()} />
        </>
      ) : (
        <SideBar clicked={() => sideBarClicked()} />
      )}
    </div>
  );
};

export default Navigation;
