import axios from "axios";

import { Axios } from "../Axios";

export const getChatSearch = async (keyword, pageSize, conversationId) => {
  try {
    const response = await axios.get(
      `/api/chats/search?keyword=${keyword}&pageSize=${pageSize}&conversationId=${conversationId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
