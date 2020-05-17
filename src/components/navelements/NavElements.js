import React from "react";
import { NavLink } from "react-router-dom";
import "./NavElements.css";
import Home from "../../assets/images/home.png";
import Hospital from "../../assets/images/hospital.png";
import Contact from "../../assets/images/contact.png";
import Notification from "../../assets/images/notification.png";
import Test from "../../assets/images/testing.png";

const NavElements = props => {
  return (
    <div className="navstyle" onClick={props.clicked}>
      <li>
        <div className="navimage">
          <img height="28px" width="28px" src={Home} alt="Home" />
          <NavLink activeClassName="active" to="/" exact={true}>
            Home
          </NavLink>
        </div>
      </li>
      <li>
        <div className="navimage">
          <img height="33px" width="33px" src={Hospital} alt="Hospital" />
          <NavLink activeClassName="active" to="/hospitals">
            Hospitals
          </NavLink>
        </div>
      </li>
      <li>
        <div className="navimage">
          <img height="30px" width="34px" src={Contact} alt="Contact" />
          <NavLink activeClassName="active" to="/contacts">
            Contact & Helpline
          </NavLink>
        </div>
      </li>
      <li>
        <div className="navimage">
          <img
            height="30px"
            width="32px"
            src={Notification}
            alt="Notification"
          />
          <NavLink activeClassName="active" to="/notifications">
            Notifications & advisories
          </NavLink>
        </div>
      </li>
      <li>
        <div className="navimage">
          <img height="30px" width="30px" src={Test} alt="Notification" />
          <NavLink activeClassName="active" to="/tests">
            Testing Status
          </NavLink>
        </div>
      </li>
    </div>
  );
};

export default NavElements;
