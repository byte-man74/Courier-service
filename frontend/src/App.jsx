import "./App.css";
import logo from "./logo.svg"

function App() {
  return (
    <div className="main-section">
      <LogoContainer />
      <MapView />
      <SearchContainer />
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
  return <div className="search-container"></div>;
};

export default App;
