export const ResultSummaryContainer = ({data}) => {
  return (
    <div className="result-summary-container">
      <div className="result-summary-header">
        <OptionIcon />
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <BackPagiationButton />
          <FrontPagiationButton />
        </div>
      </div>
      <div className="result-summary-body">
        <ResultBody />
        <ResultBody />
        <ResultBody />
        <ResultBody />
        <ResultBody />
        <ResultBody />
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

const FuelIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M3.25 23.8334H16.25M4.33333 9.75008H15.1667M15.1667 23.8334V4.33341C15.1667 3.75878 14.9384 3.20768 14.5321 2.80135C14.1257 2.39502 13.5746 2.16675 13 2.16675H6.5C5.92536 2.16675 5.37426 2.39502 4.96794 2.80135C4.56161 3.20768 4.33333 3.75878 4.33333 4.33341V23.8334M15.1667 14.0834H17.3333C17.908 14.0834 18.4591 14.3117 18.8654 14.718C19.2717 15.1243 19.5 15.6754 19.5 16.2501V18.4167C19.5 18.9914 19.7283 19.5425 20.1346 19.9488C20.5409 20.3551 21.092 20.5834 21.6667 20.5834C22.2413 20.5834 22.7924 20.3551 23.1987 19.9488C23.6051 19.5425 23.8333 18.9914 23.8333 18.4167V10.6492C23.8336 10.3633 23.7772 10.0802 23.6675 9.8162C23.5578 9.55218 23.3969 9.31248 23.1942 9.11091L19.5 5.41675"
        stroke="#F5A855"
        stroke-width="2.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ResultBody = ({name, price, address}) => {
  return <div className="result-body">
    <FuelIconSvg />
    <div className="result-body-content">
        <p style={{ fontWeight: "bold", fontSize: 15}} >{name}Ooando</p>
        <p style={{ fontWeight: 500, fontSize: 14}} >{price}600/L</p>
        <p style={{ fontWeight: 500, fontSize: 12}} >{address}New estate karu</p>
    </div>
  </div>;
};
