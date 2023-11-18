import { useState } from "react";
import styled from "styled-components";

import userSrc from "../images/user.svg";
import sendSrc from "../images/send.svg";
import { createComment } from "../../api/Chat/Comment";

const CommentForm = (chatId) => {
  const [content, setContent] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const commentData = await createComment(content, chatId.chatId);
      console.log(commentData);
      setContent("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <Layout>
      <User alt="user" src={userSrc} />
      <CommentFormBox onSubmit={handleCommentSubmit}>
        <Commentinput type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        <SendBox type="submit">
          <img alt="send" src={sendSrc} />
        </SendBox>
      </CommentFormBox>
    </Layout>
  );
};

export default CommentForm;

const Layout = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const CommentFormBox = styled.form`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 5px;
  flex: 1 0 0;
  overflow: auto;
`;

const Commentinput = styled.input`
  display: flex;
  height: 30px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  color: ${({ theme }) => theme.colors.BLACK};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PURPLE50};
  }
`;

const SendBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
`;

const User = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 529px) {
    width: 25px;
    height: 25px;
  }
`;
