import axios from "axios";

import { Axios } from "../Axios";

export const getChats = async () => {
  try {
    const response = await axios.get("/api/chats", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
