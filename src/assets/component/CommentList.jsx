import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import userSrc from "../images/user.svg";
import { getCommentsForBoard } from "../../api/Board/Comments";

const CommentList = ({ apiType }) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageSize = 2; // 원하는 페이지 크기
        const commentId = 3; // 현재 로그인된 유저 id?(해당 id 기준으로 조회대상 설정이 무슨뜻?)
        if (apiType === "board") {
          const commentData = await getCommentsForBoard(id, pageSize, commentId);
          setComments(commentData.commentResponse);
        } else if (apiType === "chat") {
          console.log("chat");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(comments);
  return (
    <Layout>
      {comments.length === 0 ? (
        <p>댓글이 없습니다.</p>
      ) : (
        comments.map((comment) => (
          <MyBox key={comment.commentId}>
            <User alt="user" src={userSrc} />
            <CommentBox>
              <UserBox>
                {comment.commentId}
                <ContentBox>{comment.content}</ContentBox>
              </UserBox>
            </CommentBox>
          </MyBox>
        ))
      )}
    </Layout>
  );
};

export default CommentList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const Box = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.WHITE};
`;

const MyBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.PURPLE10};
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const UserBox = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  align-self: stretch;

  @media (max-width: 529px) {
    font-size: 10px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};

  @media (max-width: 529px) {
    font-size: 12px;
  }
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const ButtonBox = styled.button`
  display: flex;
  padding: 3px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 529px) {
    font-size: 10px;
  }
`;

const CommentInput = styled.input`
  display: flex;
  height: 30px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  width: 90%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  color: ${({ theme }) => theme.colors.BLACK};
  background: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PURPLE50};
  }
`;

const User = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 529px) {
    width: 25px;
    height: 25px;
  }
`;
