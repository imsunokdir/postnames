import React from "react";
import imgs from "../assets/spinner.svg";

const Loading = () => {
  return (
    <div className="spinner">
      <img src={imgs} />
    </div>
  );
};

export default Loading;
