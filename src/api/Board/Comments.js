import axios from "axios";

import { Axios } from "../Axios";

//게시판 댓글 리스트
export const getCommentsForBoard = async (boardId, pageSize, commentId) => {
  try {
    const response = await axios.get(`/api/conversations/${boardId}/comments`, {
      params: {
        pageSize,
        commentId,
      },
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

//게시판 댓글 삭제
