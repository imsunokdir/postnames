import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import "../App.css";

const Landing = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [pincode, setPincode] = useState("");

  //function for input change
  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  //function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pincode.length != 6) {
      setError("Pincode must be 6 digits");
      return;
    }
    setError(null);
    navigate(`/result/${pincode}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="landing"
    >
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
    </motion.div>
  );
};

export default Landing;
