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

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [serverError, setServerError] = useState(false);
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

      <LogoContainer />
      <MapView setLoading={setLoading} />
      <SearchContainer />
      <ResultSummaryContainer />
    </div>
  );
};

export default HomePage;
