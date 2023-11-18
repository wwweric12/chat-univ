import axios from "axios";

//댓글 리스트
export const getComments = async (conversationId, pageSize, commentId) => {
  console.log(conversationId, pageSize, commentId);
  try {
    const response = await axios.get(`/api/conversations/${conversationId}/comments`, {
      params: {
        pageSize,
        commentId,
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwMzMxMTk5LCJleHAiOjE3MDAzMzQ3OTl9.da7rrSEt8LUcaRrOiYme69OdXzBJELz_0s1EQSOTA1k`,
      },
    });

    return response.data.commentResponse;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

//댓글 생성
export const createComment = async (content, chatsId) => {
  try {
    const response = await axios.post(
      `/api/conversations/${chatsId}/comments`,
      {
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiaWF0IjoxNzAwMzMxMTk5LCJleHAiOjE3MDAzMzQ3OTl9.da7rrSEt8LUcaRrOiYme69OdXzBJELz_0s1EQSOTA1k`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
