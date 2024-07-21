import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./../../logo.svg";
import pattern from "./../../pattern.jpg";

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://iloveyouu.pythonanywhere.com/api/package/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unique_id: searchInput }),
      });

      const data = await response.json();

      if (data.id) {
        // Pass data as state when navigating
        navigate("/main", { state: { packageData: data } });
      } else {
        setError("No Package with that ID exists in the database.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="w-full h-[100vh] bg-[#FCE46A] flex items-center justify-center p-4 md:p-0">
        {error && (
          <motion.div
            className="bg-red-500 text-white w-[300px] absolute top-[100px] text-center mt-4 p-2 rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}
        <div className="w-full max-w-[95%] md:max-w-[62%] h-[500px] bg-white flex flex-col justify-center rounded-md px-6 md:px-10 py-4 md:py-2 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url(${pattern})`, opacity: 0.4 }}
          ></div>
          <div className="relative z-10">
            <img
              src={logo}
              className="w-[35px] md:w-[45px] mb-8 md:mb-14"
              alt=""
            />
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-[30px] md:text-[45px] font-bold text-gray-600 text-center md:text-left">
                TRACK YOUR SHIPMENTS
              </h2>
              <p className="text-gray-600 font-semibold text-center md:text-left">
                Find and track your shipping containers effortlessly, in real
                time
              </p>
              <div className="w-full md:w-[95%] h-[120px] py-3 md:py-0 md:h-[80px] flex flex-col md:flex-row items-center justify-between rounded-md border-solid border-gray-300 px-4 md:px-2 border-2 relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="h-[40px] md:h-[50%] w-full outline-none mb-4 md:mb-0 px-2"
                  placeholder="Enter your shipping address"
                />
                <div
                  className="button md:w-[240px] w-full h-[50px] md:h-[70px] flex justify-center md:justify-start cursor-pointer bg-blue-500 text-white rounded-md flex items-center justify-center"
                  onClick={handleSearch}
                >
                  <p
                    className="text-center text-black md:text-left"
                    style={{ fontSize: 12, fontWeight: 600 }}
                  >
                    Search station
                  </p>
                </div>
              </div>
              {loading && (
                <p className="text-gray-600 text-center">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
