import APIinstance from "../../api/api";

export const getStation = async (setData, setLoading) => {
  setLoading(true);
  try {

    const response = await APIinstance.get("admin/get_all_stations/");

    setData(response.data.data);
    setLoading(false);
  } catch (error) {
    //j
  } finally {
    setLoading(false);
  }
};


export const processSearch = async (setData, data, setLoading, name, local_government) => {
  setLoading(true);

  let processed_data = filterStations(data, name, local_government)
  setData(processed_data);

  setLoading(false);
}


function filterStations(data, nameFilter, localGovFilter) {
  return data.filter(station => {
    // Check if the station name includes the specified name filter (case insensitive)
    const nameMatch = station.station.name.toLowerCase().includes(nameFilter.toLowerCase());

    // Check if the station's local government includes the specified local government filter (case insensitive)
    const localGovMatch = station.station.local_government.toLowerCase().includes(localGovFilter.toLowerCase());

    // Return true if both name and local government filters match
    return nameMatch && localGovMatch;
  });
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