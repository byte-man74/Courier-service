import React from "react";
import { useState, useEffect } from "react";
import { processSearch } from "../functions/main";

const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20 20L15 15M15 15V19M15 15H19M4 20L9 15M9 15V19M9 15H5M20 4L15 9M15 9V5M15 9H19M4 4L9 9M9 9V5M9 9H5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShrinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9 9L4 4M4 4V8M4 4H8M15 9L20 4M20 4V8M20 4H16M9 15L4 20M4 20V16M4 20H8M15 15L20 20M20 20V16M20 20H16"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClearIcon = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="27"
        viewBox="0 0 40 39"
        fill="none"
      >
        <path
          d="M26.6625 20.8L13.9062 7.9625L20 3.25L34.625 14.625L26.6625 20.8ZM31.3344 25.4313L28.9781 23.075L31.9438 20.8L34.625 22.8313L31.3344 25.4313ZM32.675 35.9125L26.175 29.4125L20 34.2063L5.375 22.8313L8.05625 20.8L20 30.0625L23.8188 27.0969L21.5031 24.8219L20 26L5.375 14.625L8.74687 11.9844L2.73438 6.05313L5.05 3.7375L34.95 33.6375L32.675 35.9125Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const SearchContainer = ({ setData, data, originalData, setLoading }) => {

  const resetFilter = () => {
    console.log(originalData);
    setData(originalData)
  }

  const [shrinkState, setShrinkState] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchButtonClick = () => {
    console.log(searchText);
    processSearch(setData, data, setLoading, searchText, "");
  };

  return (
    <div className="search-container" style={shrinkState ? { height: 45 } : {}}>
      <div
        className="search-container-top"
        onClick={() => setShrinkState(!shrinkState)}
      >
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {!shrinkState ? <ExpandIcon /> : <ShrinkIcon />}
          <p style={{ color: "white" }}>Filter Search</p>
        </div>
        <ClearIcon onClick={resetFilter} />
      </div>
      {!shrinkState ? (
        <>
          <input
            type="text"
            className="search-container-input"
            placeholder="Search fueling station by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
          <div className="button" onClick={handleSearchButtonClick}>
            <p style={{ fontSize: 12, fontWeight: "bold", color: "" }}>
              Search station
            </p>
          </div>

          <div className="button blue">
            <p style={{ fontSize: 12, fontWeight: "bold", color: "" }}>
              Compute Average price
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
