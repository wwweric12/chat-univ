import axios from "axios";

import { Axios } from "../Axios";

export const getChats = async () => {
  try {
    const response = await axios.get("/api/chats", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwMTQ3NTU0LCJleHAiOjE3MDAxNTExNTR9.9Q5P9nhryDLl5fgBlpcuvMT63HPL7oZfFbhG64aB_Cw`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
