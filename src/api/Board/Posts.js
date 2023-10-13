import { Axios } from "../Axios";

export const AxiosWritePost = async () => {
  try {
    const response = await Axios.get(`/api/boards/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
