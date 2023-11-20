import APIinstance from "../../api/api";

export const getStation = async (setData, setLoading, setOriginalData) => {
  setLoading(true);
  try {

    const response = await APIinstance.get("admin/get_all_stations/");

    setData(response.data.data);
    setOriginalData(response.data.data);
    setLoading(false);
  } catch (error) {
    //j
  } finally {
    setLoading(false);
  }
};


export const processSearch = async (setData, data, setLoading, name, local_government) => {
  setLoading(true);

  if (!name && !local_government) {
    // If both name and local_government are falsy, reset the data to the original state
    setData(data);
  } else {
    let processed_data = filterStations(data, name, local_government);
    setData(processed_data);
  }

  setLoading(false);
};



function filterStations(data, nameFilter, localGovFilter) {
  console.log(nameFilter);
  try {
    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid or missing data array');
    }

    if (typeof nameFilter !== 'string' || typeof localGovFilter !== 'string') {
      throw new Error('Invalid filter parameters');
    }

    const processedData = data.filter((station) => {
      const nameMatch =
        station.station.name &&
        station.station.name.toLowerCase().includes(nameFilter.toLowerCase());

      const localGovMatch =
        station.station.local_government &&
        station.station.local_government
          .toLowerCase()
          .includes(localGovFilter.toLowerCase());

      return nameMatch && localGovMatch;
    });

    return processedData;
  } catch (error) {
    console.error('Error in filterStations:', error.message);
    return [];
  }
}





function calculateStationsAndAveragePrice(data) {
  // Check if the dataset is empty
  if (data.length === 0) {
    return { numberOfStations: 0, averagePrice: 0 };
  }

  // Calculate the total number of stations
  const numberOfStations = data.length;

  // Calculate the average price
  const totalPrices = data.reduce((sum, station) => sum + station.price.amount, 0);
  const averagePrice = totalPrices / numberOfStations;

  // Round the average price to two decimal places
  const roundedAveragePrice = Math.round(averagePrice * 100) / 100;

  return { numberOfStations, averagePrice: roundedAveragePrice };
}