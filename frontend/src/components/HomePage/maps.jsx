import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getStation } from "../functions/main";


export const MapView = ({setLoading, data, setData}) => {
  const [locationData, setLocation] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // Fetch the location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      // Handle location errors
      () => {
        setError("Unable to retrieve your location.");
      }
    );
    getStation(setData, setLoading)
    
  }, []);

  return (
    <div className="map-container">
      <MyMapComponent locationData={locationData} />
      <div className="map-overlay"></div>
    </div>
  );
};

const MyMapComponent = ({ locationData }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBP6dRPyFctOHxbZMli7z7kmdxqH2GwPgI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(locationData);    
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={locationData}
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
