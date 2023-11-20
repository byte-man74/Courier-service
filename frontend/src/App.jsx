import "./App.css";
import Splash from "./components/SplashPage/splashScreen";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/home_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
