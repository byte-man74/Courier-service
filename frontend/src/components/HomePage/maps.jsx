import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  OverlayView,
  Polyline,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { getStation } from "../functions/main";
import { useNavigate } from "react-router-dom";

const MapsSvg = () => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.7084 15.4062V14.3133C30.7084 11.6054 30.7084 10.2528 29.8904 9.41114C29.0724 8.57085 27.7576 8.57085 25.125 8.57085H22.2231C20.9431 8.57085 20.9319 8.56805 19.7804 7.99158L15.1309 5.66472C13.1892 4.69322 12.2177 4.20747 11.1834 4.24097C10.1491 4.27447 9.21252 4.82303 7.33233 5.92016L5.61965 6.91958C4.23917 7.72497 3.54962 8.12837 3.17135 8.79837C2.79169 9.46837 2.79169 10.2835 2.79169 11.9153V23.3848C2.79169 25.5274 2.79169 26.5994 3.26906 27.1954C3.58731 27.5933 4.03258 27.8599 4.52531 27.9492C5.2651 28.0818 6.1724 27.5528 7.98419 26.4947C9.21531 25.7759 10.399 25.0291 11.8716 25.2315C13.1055 25.4018 14.2515 26.1807 15.3542 26.732M11.1667 4.23958V25.1771M20.9375 8.42708V19.5937M26.2836 20.6462C26.6995 20.1953 26.9075 19.9706 27.128 19.8394C27.3889 19.683 27.6863 19.598 27.9904 19.5931C28.2945 19.5882 28.5945 19.6635 28.8603 19.8115C29.085 19.9371 29.3 20.1563 29.7285 20.5946C30.157 21.0328 30.3706 21.2506 30.4934 21.4809C30.7893 22.0351 30.7795 22.7065 30.4683 23.2508C30.3399 23.477 30.1193 23.6891 29.6782 24.1148L24.4271 29.1719C23.591 29.9773 23.1736 30.3793 22.6502 30.5845C22.1282 30.7883 21.5531 30.773 20.4043 30.7423L20.248 30.7395C19.899 30.7297 19.7231 30.7255 19.6213 30.6097C19.5208 30.4938 19.5347 30.3165 19.5612 29.9606L19.5766 29.7652C19.6547 28.763 19.6938 28.2619 19.8892 27.811C20.0847 27.3602 20.4239 26.9944 21.0994 26.2616L26.2836 20.6462Z"
        stroke="white"
        stroke-width="2.09375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CustomOverlay = ({ position, text }) => {
  const [show, setShow] = React.useState(true);

  return show ? (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={() => ({ x: -50, y: -50 })}
    >
      <div
        style={{
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px",
          color: "black",
          textAlign: "center",
          whiteSpace: "nowrap",
          fontSize: "12px",
          width: 100,
          position: "absolute",
          bottom: 20,
          fontWeight: "bold",
          boxShadow: "0 0 6px rgba(0,0,0,0.3)",
        }}
      >
        {text}
      </div>
    </OverlayView>
  ) : null;
};

const SecondCustomOverlay = ({ position, text }) => {
  const [show, setShow] = React.useState(true);

  return show ? (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={() => ({ x: -50, y: -50 })}
    >
      <div
        style={{
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px",
          color: "black",
          textAlign: "center",
          whiteSpace: "nowrap",
          fontSize: "12px",
          width: 100,
          position: "absolute",
          bottom: 0,
          fontWeight: "bold",
          boxShadow: "0 0 6px rgba(0,0,0,0.3)",
        }}
      >
        {text}
      </div>
    </OverlayView>
  ) : null;
};

export const MapView = ({
  setLoading,
  data,
  setOriginalData,
  setData,
  modal,
  setModal,
}) => {
  const [locationData, setLocation] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const navigate = useNavigate()
  const [dataLocation, setDataLocation] = useState(null); // For the data location
  const [error, setError] = useState(null);
  const ViewSvg = () => (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.16669 33.6296V31.8379H35.8334V33.6296H7.16669ZM7.16669 11.1621V9.37041H35.8334V11.1621H7.16669ZM10.062 26.875C9.23666 26.875 8.54806 26.5991 7.99623 26.0472C7.4444 25.4954 7.16788 24.8068 7.16669 23.9815V19.0185C7.16669 18.1944 7.4432 17.5064 7.99623 16.9545C8.54926 16.4027 9.23785 16.1262 10.062 16.125H32.9398C33.764 16.125 34.4526 16.4015 35.0056 16.9545C35.5586 17.5076 35.8345 18.1962 35.8334 19.0203V23.9815C35.8334 24.8056 35.5574 25.4942 35.0056 26.0472C34.4538 26.6003 33.7646 26.8762 32.938 26.875H10.062Z"
        fill="#1E1E1E"
      />
    </svg>
  );

  const BackSvg = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33333 13.3333L4.39066 14.276L3.448 13.3333L4.39066 12.3907L5.33333 13.3333ZM28 24C28 24.3536 27.8595 24.6928 27.6095 24.9428C27.3594 25.1929 27.0203 25.3333 26.6667 25.3333C26.313 25.3333 25.9739 25.1929 25.7239 24.9428C25.4738 24.6928 25.3333 24.3536 25.3333 24H28ZM11.0573 20.9427L4.39066 14.276L6.276 12.3907L12.9427 19.0573L11.0573 20.9427ZM4.39066 12.3907L11.0573 5.724L12.9427 7.60933L6.276 14.276L4.39066 12.3907ZM5.33333 12H18.6667V14.6667H5.33333V12ZM28 21.3333V24H25.3333V21.3333H28ZM18.6667 12C21.142 12 23.516 12.9833 25.2663 14.7337C27.0167 16.484 28 18.858 28 21.3333H25.3333C25.3333 19.5652 24.631 17.8695 23.3807 16.6193C22.1305 15.369 20.4348 14.6667 18.6667 14.6667V12Z"
        fill="#F3F3F3"
      />
    </svg>
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );

    getStation(setData, setLoading, setOriginalData);
  }, []);

  useEffect(() => {
    if (data && data.latitude && data.longitude) {
      setDataLocation({
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude),
      });
    }
  }, [data]);

  return (
    <div className="map-container relative">
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/search")}
        className="absolute bg-black border-[#B7B7B7] border-1 border-solid flex items-center justify-center gap-3 top-8 left-2 md:top-8 md:left-8 w-[60px] rounded-full h-[60px] z-[1000] cursor-pointer"
      >
        <BackSvg />
      </motion.div>
      {!modal ? (
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setModal(true)}
          className="absolute bg-white border-[#B7B7B7] border-1 border-solid flex items-center justify-center gap-3 w-[90%] bottom-8 left-4 right-4 md:bottom-8 md:left-8 md:w-[350px] h-[60px] z-[1000] rounded-md cursor-pointer"
        >
          <ViewSvg />
          <p className="font-semibold text-gray-700 text-xl">
            View Shipping Details
          </p>
        </motion.div>
      ) : (
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute md:bg-white bg-black border-[#B7B7B7] border-1 border-solid flex items-center justify-center gap-3 w-[90%] bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:w-[350px] h-[60px] z-[1000] rounded-md cursor-pointer"
          onClick={() => setModal(false)}
        >
          <MapsSvg />
          <p className="font-semibold md:text-gray-700 text-white text-xl">
            Go back to maps
          </p>
        </motion.div>
      )}
      <MyMapComponent userLocation={locationData} dataLocation={dataLocation} />
      <div className="map-overlay"></div>
    </div>
  );
};
const MyMapComponent = ({ userLocation, dataLocation }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBP6dRPyFctOHxbZMli7z7kmdxqH2GwPgI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      if (userLocation) {
        bounds.extend(userLocation);
      }
      if (dataLocation) {
        bounds.extend(dataLocation);
      }
      map.fitBounds(bounds);

      setMap(map);
    },
    [userLocation, dataLocation]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const polylinePath =
    userLocation && dataLocation ? [userLocation, dataLocation] : [];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation || { lat: -3.745, lng: -38.523 }} // Default center if no location data
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {userLocation && (
        <>
          <Marker
            position={userLocation}
            icon={{
              url: "https://www.nicepng.com/png/full/14-145167_home-icon-home-icon-png-green.png",
              scaledSize: new window.google.maps.Size(60, 60), // Adjust size if needed
            }}
            label=""
          />
          <CustomOverlay position={userLocation} text="My Home" />
        </>
      )}
      {dataLocation && (
        <>
          <Marker
            position={dataLocation}
            icon={{
              url: "https://www.nicepng.com/png/full/124-1243559_software-package-icon.png",
              scaledSize: new window.google.maps.Size(40, 40), // Adjust size if needed
            }}
          />
          <SecondCustomOverlay position={dataLocation} text="Parcel" />
        </>
      )}
      {polylinePath.length > 0 && (
        <Polyline
          path={polylinePath}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            icons: [
              {
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/green.png",
                offset: "100%",
                repeat: "20px",
              },
            ],
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};
