import { Axios } from "../Axios";
import axios from "axios";

export const getChats = async () => {
  try {
    const response = await axios.get(
      '/api/chats',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};