import React from "react";
import { useHistory } from "react-router-dom";
import Warning from "../../assets/images/warning.png";
import "./ErrorComponent.css";

const ErrorComponent = () => {
  const history = useHistory();
  const goToHomeClicked = () => {
    history.push("/");
  };
  return (
    <div className="err">
      <div>
        <img alt="warning" src={Warning} />
      </div>
      Oops!! Something went Wrong.Please try again later
      <div>
        <button onClick={() => goToHomeClicked()}>Go to Home</button>
      </div>
    </div>
  );
};

export default ErrorComponent;
