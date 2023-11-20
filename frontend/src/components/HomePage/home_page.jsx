import React from "react";
import { LogoContainer } from "./logo";
import { MapView } from "./maps";
import { SearchContainer } from "./search_container";
import { ResultSummaryContainer } from "./result_summary";
import { useState } from "react";
import Lottie from "lottie-react";
import animation_data from "../../../src/app_load.json";
import network_error from "../../../src/networkErr.json";
import server_error from "../../../src/serverErr.json";
import calculate from "../../../src/calculate.json";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [averagePrice, setAveragePrice] = useState(null);



  const CloseIcon = () => {
    return (
      <div onClick={() => setAveragePrice([])} style={{ cursor: "pointer"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="black"
          />
        </svg>
      </div>
    );
  };







  return (
    <div className="main-section">
      {loading && (
        <div className="main-overlay">
          <div>
            <Lottie
              animationData={animation_data}
              style={{ width: 320 }}
              loop={true}
            />
            <p style={{ marginTop: 0, color: "white", fontWeight: 700 }}>
              Fetching Data, This may take a minute
            </p>
          </div>
        </div>
      )}
      {networkError && (
        <div className="main-overlay">
          <div className="network-error-box">
            <Lottie
              animationData={network_error}
              style={{ width: 200 }}
              loop={true}
            />
            <h6>Network Error, Press Ctrl + R to refresh</h6>
          </div>
        </div>
      )}
      {serverError && (
        <div className="main-overlay">
          <div className="network-error-box">
            <Lottie
              animationData={server_error}
              style={{ width: 220 }}
              loop={true}
            />
            <h6>Server Error, Press Ctrl + R to refresh</h6>
          </div>
        </div>
      )}
      {averagePrice == null && (
        <div className="main-overlay">
          <div className="network-error-box" style={{ height: 400 }}>
            <div className="box-header">
              <CloseIcon />
            </div>
            <Lottie
              animationData={calculate}
              style={{ width: 220 }}
              loop={true}
            />
            <h6>Average price of stations available ...₦360/L</h6>
          </div>
        </div>
      )}

      <LogoContainer />
      <MapView
        setLoading={setLoading}
        data={data}
        setData={setData}
        setOriginalData={setOriginalData}
      />
      <SearchContainer
        setData={setData}
        data={data}
        originalData={originalData}
        setLoading={setLoading}
      />
      <ResultSummaryContainer data={data} />
    </div>
  );
};


export default HomePage;
