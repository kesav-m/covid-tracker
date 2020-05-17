import React from "react";
import CountUp from "react-countup";
import "./Card.css";

const Card = ({ summary }) => {
  const total = Number(summary && summary[0].total);
  return (
    <div className="card-container">
      <div className="card danger">
        <div className="count">Confirmed</div>

        <div className="count">
          <CountUp duration={3} end={total} />
        </div>
      </div>
      <div className="card active">
        <div className="count">Active</div>
        <div className="count">
          <CountUp duration={3} end={summary && Number(summary[0].active)} />
        </div>
      </div>
      <div className="card recovered">
        <div className="count">Recovered</div>
        <div className="count">
          <CountUp duration={3} end={summary && Number(summary[0].recovered)} />
        </div>
      </div>
      <div className="card blackout">
        <div className="count">Deaths</div>
        <div className="count">
          <CountUp duration={3} end={summary && Number(summary[0].deaths)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
