import APIinstance from "../../api/api";

export const getStation = async (setData, setLoading) => {
  try {
    setLoading(true);
    const response = await APIinstance.get("admin/get_all_stations/");

    setData(response.data);
  } catch (error) {
    //j
  } finally {
    setLoading(false);
  }
};
