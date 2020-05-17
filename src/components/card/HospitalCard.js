import React from "react";
import HospitalIcon from "../../assets/images/pagehospital.png";
import Bed from "../../assets/images/bed.png";

const HospitalCard = ({ summary, regional }) => {
  const { totalHospitals, totalBeds } = summary || "";
  return (
    <>
      <h2 className="head2">
        Hospitals & Beds(excluding govt & prvt medical colleges)
      </h2>
      <div className="card-container">
        <div className="medical-total">
          <div> Total </div>
          <div>
            <img
              className="himg"
              title="Total Hospitals"
              alt="hospital"
              src={HospitalIcon}
            />
            <img className="himg" title="Total Beds" alt="hospital" src={Bed} />
          </div>
          <div>
            <span className="himg">{totalHospitals}</span>
            <span className="himg">{totalBeds}</span>
          </div>
        </div>
      </div>
      <div className="card-container">
        {regional &&
          regional.map((data, index) => {
            return (
              <div className="hospital-card" key={index}>
                <div>{data.state}</div>
                <div>
                  <img
                    className="himg"
                    title="Total Hospitals"
                    alt="hospital"
                    src={HospitalIcon}
                  />
                  <img
                    className="himg"
                    title="Total Beds"
                    alt="hospital"
                    src={Bed}
                  />
                </div>
                <div>
                  <span className="himg">{data.totalHospitals}</span>
                  <span className="hspan">{data.totalBeds}</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HospitalCard;
