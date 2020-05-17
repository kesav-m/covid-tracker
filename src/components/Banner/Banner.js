import React from "react";
import Covid from "../../assets/images/covid.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div>C</div>
        <div>
          <img height="35px" width="35px" alt="0" src={Covid} />
        </div>
        <div>VID-19</div>
        <div style={{ paddingLeft: "10px" }}>INDIA</div>
      </div>
      <p className="disclaimer">
        This is not a official website but data is taken from the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.rootnet.in/"
        >
          official
        </a>
        &nbsp;sources periodically.
      </p>
    </>
  );
};
export default Banner;
