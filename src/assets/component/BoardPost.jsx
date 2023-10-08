import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardPost = ({ mypage, dataContents }) => {
  const { title, content, boardId, date } = dataContents;
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("delete"); /* 삭제 버튼 onClick 활성화를 위해 console.log 추가해놨습니다. */
  };

  const goDetail = () => {
    navigate(`/board/${boardId}`);
  };

  return (
    <PostArea>
      <PostContainer>
        <PostTitleBox onClick={goDetail}>
          <PostTitle>{title}</PostTitle>
          <PostContent>{content}</PostContent>
        </PostTitleBox>
        <PostButton $mypage={mypage} onClick={handleDelete}>
          삭제
        </PostButton>
        {/* mypage면 삭제 버튼이 띄워져야 합니다. */}
      </PostContainer>
      <PostUserBox>
        <PostUserId>{boardId}</PostUserId>|<PostDate>{date}</PostDate>
      </PostUserBox>
    </PostArea>
  );
};

export default BoardPost;

const PostArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  margin-bottom: 10px;
`;

const PostTitleBox = styled.div`
  width: 100%;
  height: 52px;
`;

const PostTitle = styled.div`
  height: 26px;
  font-size: 20px;

  @media (max-width: 529px) {
    font-size: 14px;
    height: 18px;
  }
`;

const PostContent = styled.div`
  height: 21px;
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 529px) {
    font-size: 12px;
    height: 16px;
  }
`;

const PostButton = styled.button`
  width: 36px;
  height: 22px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 5px;
  display: ${({ $mypage }) => ($mypage ? "block" : "none")};
`;

const PostUserBox = styled.div`
  display: flex;
  height: 18px;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 14px;

  @media (max-width: 529px) {
    font-size: 10px;
    height: 13px;
  }
`;

const PostUserId = styled.div`
  margin-right: 5px;
`;

const PostDate = styled.div`
  margin-left: 5px;
`;
