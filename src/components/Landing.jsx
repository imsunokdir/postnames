import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pincodeAction } from "../store/pincode";
import { motion } from "framer-motion";
import "../App.css";

const Landing = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const pincode = useSelector((state) => state.pincode);
  const dispatch = useDispatch();

  //session variables

  //function for input change
  const handleChange = (e) => {
    dispatch(pincodeAction.changePincode(e.target.value));
  };

  //   function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pincode.length != 6) {
      setError("Pincode must be 6 digits");
      return;
    }
    sessionStorage.setItem("pincode", pincode);
    setError(null);
    navigate("/result");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="landing"
    >
      {/* <div className="landing"> */}
      <h1>Pincode Lookup</h1>
      <form onSubmit={handleSubmit}>
        <div className="pincode-input-div">
          <input
            type="text"
            value={pincode}
            onChange={handleChange}
            placeholder="Enter Pincode"
          />
          <button type="submit">Lookup</button>
        </div>
      </form>
      {error && (
        <div>
          <p className="pin-validate">pincode should be of length 6</p>
        </div>
      )}
      {/* </div> */}
    </motion.div>
  );
};

export default Landing;
