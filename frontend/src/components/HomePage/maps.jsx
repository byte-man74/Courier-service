import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export const MapView = () => {
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
  