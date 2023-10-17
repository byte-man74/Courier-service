export const ResultSummaryContainer = () => {
  return (
    <div className="result-summary-container">
      <div className="result-summary-header">
        <OptionIcon />
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <BackPagiationButton />
          <FrontPagiationButton />
        </div>
      </div>
    </div>
  );
};

const OptionIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M1.75 12.25H33.25V15.75H1.75V12.25ZM1.75 19.25H26.25V22.75H1.75V19.25Z"
        fill="black"
      />
    </svg>
  );
};

const BackPagiationButton = () => {
  return (
    <div className="button-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M12.5 6.875H4.89375L8.3875 3.38125L7.5 2.5L2.5 7.5L7.5 12.5L8.38125 11.6187L4.89375 8.125H12.5V6.875Z"
          fill="#3F3F3F"
        />
      </svg>
    </div>
  );
};

const FrontPagiationButton = () => {
  return (
    <div className="button-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M2.5 6.875H10.1063L6.6125 3.38125L7.5 2.5L12.5 7.5L7.5 12.5L6.61875 11.6187L10.1063 8.125H2.5V6.875Z"
          fill="#3F3F3F"
        />
      </svg>
    </div>
  );
};
