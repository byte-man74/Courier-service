import "./App.css";
import Splash from "./components/SplashPage/splashScreen";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/home_page";
import { SearchPage } from "./components/SearchPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
