import "./App.css";
import logo from "./logo.svg";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

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
  return (
    <div className="map-container">
      <MyMapComponent />
      <div className="map-overlay"></div>
    </div>
  );
};

const MyMapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBP6dRPyFctOHxbZMli7z7kmdxqH2GwPgI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-container-top"></div>
      <input
        type="text"
        className="search-container-input"
        placeholder="Search fueling station by name"
      />

      {/* state selection */}
      <select
        // value={selectedOption}
        className="dropdown-list"
        // onChange={handleOptionChange}
      >
        <option value="">--Select a state--</option>
      </select>

      {/* state selection */}
      <select
        // value={selectedOption}
        className="dropdown-list"
        // onChange={handleOptionChange}
      >
        <option value="">--Select a local government--</option>
      </select>

      {/* buttton container  */}
      <div className="button">
        <p style={{ fontSize: 14, fontWeight: "bold", color: "" }}>Search station</p>
      </div>
    </div>
  );
};

const ResultSummaryContainer = () => {
  return <div className="result-summary-container"></div>;
};

export default App;
