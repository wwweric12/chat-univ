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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwOTk5MzEwLCJleHAiOjE3MDEwMDI5MTB9.-sM9lZ55O8AeGSjtwcizrFrRNpUFqjBwaVyqcE1QLGQ`,
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//게시판 댓글 생성
export const postCommentForBoard = async (content) => {
  try {
    const response = await axios.post(
      "/api/boards/1/comments",
      {
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwOTk5MzEwLCJleHAiOjE3MDEwMDI5MTB9.-sM9lZ55O8AeGSjtwcizrFrRNpUFqjBwaVyqcE1QLGQ`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//게시판 댓글
