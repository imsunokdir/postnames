import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  // console.log("asdsadasdasdasdasdasd", error);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/result");
  };
  return (
    <div className="error">
      <div className="error-message">
        <h3>Opps.....There was an error fetching your data</h3>
        <div className="error-button">
          <button onClick={handleClick} className="error-btns">
            Try again
          </button>
          <button className="error-btns" onClick={() => navigate("/")}>
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
