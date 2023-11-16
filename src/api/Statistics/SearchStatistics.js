import axios from "axios";

import { Axios } from "../Axios";

export const getStatistics = async () => {
  const response = await axios.get("/api/statistics", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  if (response.status === 200) {
    return response.data;
  } else if (response.status === 404) {
    return null;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
};
