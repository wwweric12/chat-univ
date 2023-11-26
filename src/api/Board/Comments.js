import axios from "axios";

import { Axios } from "../Axios";

//게시판 댓글 리스트
export const getCommentsForBoard = async (boardId) => {
  try {
    const response = await axios.get(`/api/boards/${boardId}/comments`, {
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

//게시판 댓글 생성
export const postCommentForBoard = async (boardId, content) => {
  try {
    const response = await axios.post(
      `/api/boards/${boardId}/comments`,
      {
        content: content,
      },
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

//게시판 댓글 수정
export const updateComment = async (commentId, newContent) => {
  try {
    const response = await axios.patch(
      `/api/comments/${commentId}`,
      {
        content: newContent,
      },
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

//게시판 댓글 삭제
export const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`/api/comments/${commentId}`, {
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
