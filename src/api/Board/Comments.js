import axios from "axios";

import { Axios } from "../Axios";

//게시판 댓글 리스트
export const getCommentsForBoard = async (boardId) => {
  try {
    const response = await axios.get(`/api/boards/${boardId}/comments`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwOTk5MzEwLCJleHAiOjE3MDEwMDI5MTB9.-sM9lZ55O8AeGSjtwcizrFrRNpUFqjBwaVyqcE1QLGQ`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAxMDA3NTU3LCJleHAiOjE3MDEwMTExNTd9.UPcCtTYbZ4O-4CH_H_UHgWhug4yiAFfVbLUmo-1NZgY`,
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
