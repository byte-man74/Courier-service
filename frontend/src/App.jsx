import "./App.css";
import logo from "./logo.svg"

function App() {
  return (
    <div className="main-section">
      <LogoContainer />
      <MapView />
      <SearchContainer />
      <ResultSummaryContainer />
    </div>
  );
}

const LogoContainer = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
  );
};

const MapView = () => {
  return <div className="map-container"></div>;
};

const SearchContainer = () => {
  return <div className="search-container">
    <div className="search-container-top"></div>
    <input type="text" className="search-container-input" placeholder="Search fueling station by name"/>
  </div>;
};


const ResultSummaryContainer = () => {
  return (
    <div className="result-summary-container"></div>
  )
}



export default App;
