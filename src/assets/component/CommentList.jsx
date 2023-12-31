import { useState } from "react";
import styled from "styled-components";

import userSrc from "../images/user.svg";

const CommentList = () => {
  // 자신의 댓글인지 여부
  const [own, setOwn] = useState(false);
  const [editContent, setEditContent] = useState("");
  return (
    <Layout>
      {/* map함수로 구현  */}
      {/* 임시로 내 댓글일때 아닐때 확인용으로 만듬 */}

      <Box>
        <User alt="user" src={userSrc} />

        <CommentBox>
          <UserBox>user</UserBox>
          <ContentBox>content</ContentBox>
        </CommentBox>
      </Box>

      {/* 내 댓글 */}
      <MyBox>
        <User alt="user" src={userSrc} />

        <CommentBox>
          <UserBox>
            user
            {!own && (
              <ButtonLayout>
                <ButtonBox>수정</ButtonBox>
                <ButtonBox>삭제</ButtonBox>
              </ButtonLayout>
            )}
          </UserBox>

          {!own ? (
            <ContentBox>content</ContentBox>
          ) : (
            <CommentInput value={editContent} onChange={(e) => setEditContent(e.target.value)} />
          )}
        </CommentBox>
      </MyBox>
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
