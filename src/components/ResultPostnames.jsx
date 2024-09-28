import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ResultPostnames = () => {
  //   const pincode = useSelector((state) => state.pincode);
  //1
  const [data, setData] = useState([]);
  const [pincodeData, setPincodeData] = useState([]);
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("Error");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { pincode } = useParams();

  const handleFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setFilter(searchValue);
    if (searchValue === "") {
      setPincodeData(data.PostOffice);
      console.log(data.PostOffice);
      return;
    }
    const filteredData = data.PostOffice.filter((item) =>
      item.Name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPincodeData(filteredData);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const resData = await response.json();
        console.log(resData, resData);
        console.log(resData[0].PostOffice);
        setData(resData[0]);
        setPincodeData(resData[0].PostOffice);
        setStatus(resData[0].Status);
        setError(null);
      } catch (err) {
        console.log(err.message);
        setError(err);
        // alert(err.message);
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const motionItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="result">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="pincode-text">Pincode: {pincode}</p>
          <p>
            <span className="message">Message : </span>
            {data.Message}
          </p>
          {status == "Success" ? (
            <>
              <input
                type="text"
                placeholder="Filter By Name"
                value={filter}
                onChange={handleFilter}
                className="filter"
              />
              <motion.div
                className="postnames"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {pincodeData && pincodeData.length > 0 ? (
                  pincodeData.map((item, i) => {
                    return (
                      <motion.div
                        className="card"
                        key={i}
                        variants={motionItem}
                      >
                        <p>Name: {item.Name}</p>
                        <p>Branch Type: {item.BranchType}</p>
                        <p>Delivery Status: {item.DeliveryStatus}</p>
                        <p>District: {item.District}</p>
                        <p>Division: {item.Division}</p>
                      </motion.div>
                    );
                  })
                ) : (
                  <p>Couldn’t find the postal data you’re looking for…”</p>
                )}
              </motion.div>
            </>
          ) : (
            <p>Couldn't find the postal data you're looking for</p>
          )}
        </>
      )}
    </div>
  );
};

export default ResultPostnames;
