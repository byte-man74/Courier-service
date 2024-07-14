import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../logo.svg";


const Splash = () => {
  const history = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      history(`/search`)
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [history]);

  return (
    <div className="splash-main">
      <div className="logo-and-text-box">
        <img src={logo} style={{ width: 150 }} alt="logo" />
      </div>
    </div>
  );
};

export default Splash;