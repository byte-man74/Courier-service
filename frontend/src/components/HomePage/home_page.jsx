import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MapView } from "./maps";
import Lottie from "lottie-react";
import animation_data from "../../../src/app_load.json";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const { packageData } = location.state || {}; // Get the packageData from the state
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  console.log(packageData);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!packageData) {
      navigate("/search");
    }
  }, [packageData]);

  return (
    <div className="main-section relative">
      {loading && (
        <div className="main-overlay">
          <div>
            <Lottie
              animationData={animation_data}
              style={{ width: 320 }}
              loop={true}
            />
            <p style={{ marginTop: 0, color: "white", fontWeight: 700 }}>
              Fetching Data, This may take a minute
            </p>
          </div>
        </div>
      )}
      {modal && (
        <div className="main-overlay">
          <div className="w-[90%] md:w-[800px] h-[70vh]  px-2 py-4 bg-white rounded-md overflow-y-auto">
            <div className="flex flex-col">
              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Reciever's name:</h2>
                <p>{packageData.receiver_name} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Country:</h2>
                <p>{packageData.country} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">State:</h2>
                <p>{packageData.receiver_state} </p>
              </div>


              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">City:</h2>
                <p>{packageData.receiver_city} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">House Address:</h2>
                <p>{packageData.house_address} </p>
              </div>


              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Receiver's Email:</h2>
                <p>{packageData.receiver_email} </p>
              </div>


              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Sender's Name:</h2>
                <p>{packageData.sender_name} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Sender's address:</h2>
                <p>{packageData.sender_house_number} </p>
              </div>


              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Description:</h2>
                <p>{packageData.description} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Content of Parcel:</h2>
                <p>{packageData.content_of_parcel} </p>
              </div>

              <div className="border-b border-gray-300 p-4">
                <h2 className="font-semibold">Weight:</h2>
                <p>{packageData.weight} </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <MapView
        setLoading={setLoading}
        data={packageData}
        setData={() => {}} // Adjust according to your requirements
        setOriginalData={true}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default HomePage;
