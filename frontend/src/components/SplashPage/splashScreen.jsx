import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../logo.svg";
import bro from "./../../bro.svg";
import leaves from "./../../leaves.svg";

const Splash = () => {
  const history = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // Replace "/destination" with the path you want to navigate to
      history(`/main`)
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [history]);

  return (
    <div className="splash-main">
      <div className="logo-and-text-box">
        <img src={logo} style={{ width: 70 }} alt="logo" />
        <h2>Price Wiz Analytics</h2>
        <p style={{ textAlign: "center"}}>
          PriceWiz Analytics is a cutting-edge data analysis platform designed
          to empower businesses with actionable insights into pricing strategies
          and market dynamics.
        </p>
      </div>
      <img src={bro} className="bro" alt="logo" />
      <img src={leaves} className="leaves" alt="logo" />
    </div>
  );
};

export default Splash;