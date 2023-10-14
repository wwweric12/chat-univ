import { Axios } from "../Axios";

export const AxiosWritePost = async ({ title, content }) => {
  try {
    const response = await Axios.post(
      `/api/boards`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
