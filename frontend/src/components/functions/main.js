import APIinstance from "../../api/api";

export const getStation = async (setData, setLoading) => {
  setLoading(true);
  try {

    const response = await APIinstance.get("admin/get_all_stations/");

    setData(response.data);
    setLoading(false);
  } catch (error) {
    //j
  } finally {
    setLoading(false);
  }
};
