import styled from "styled-components";

import user from "../../images/user.svg";
import Comment from "../../component/Comment";

const Detail = () => {
  return (
    <>
      <DetailContainer>
        <DetailUserBox>
          <DetailUserImg src={user} alt="userImg"></DetailUserImg>
          <DetailUserIdBox>
            <DetailUserId>UserId</DetailUserId>
            <DetailDate>02.02 21:09</DetailDate>
          </DetailUserIdBox>
        </DetailUserBox>
        <DetailContentBox>
          <DetailTitle>Title</DetailTitle>
          <DetailContent>Content...</DetailContent>
        </DetailContentBox>
      </DetailContainer>
      <Comment apiType="board" />
    </>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 10px;

  @media (max-width: 529px) {
    width: 270px;
  }
`;

const DetailUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  padding: 10px;
`;

const DetailUserImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 5px;

  @media (max-width: 529px) {
    width: 25px;
    height: 25px;
  }
`;

const DetailUserIdBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 44px;
`;

const DetailUserId = styled.div`
  height: 18px;
  font-size: 14px;
  @media (max-width: 529px) {
    font-size: 12px;
  }
`;

const DetailDate = styled.div`
  height: 18px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const DetailContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 520px;
  padding: 10px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-weight: 600;
`;

const DetailContent = styled.div`
  width: 480px;
  height: 464px;
  font-size: 16px;
  overflow-x: scroll;
  word-wrap: break-word;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 529px) {
    width: 100%;
  }
`;
