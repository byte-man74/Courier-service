import React from "react";
import { useState } from "react";

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

export const SearchContainer = () => {
  const [shrinkState, setShrinkState] = useState(false);

  return (
    <div className="search-container" style={shrinkState ? { height: 45 } : {}}>
      <div
        className="search-container-top"
        onClick={() => setShrinkState(!shrinkState)}
      >
        {!shrinkState ? <ExpandIcon /> : <ShrinkIcon />}
        <p style={{ color: "white" }}>Filter Search</p>
      </div>
      {!shrinkState ? (
        <>
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
            <p style={{ fontSize: 12, fontWeight: "bold", color: "" }}>
              Search station
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
