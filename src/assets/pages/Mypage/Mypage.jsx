import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Mypage = () => {
  const [myPageData, seMyPageData] = useState([
    { path: "editprofile", title: "내 정보 수정" },
    { path: "boardlist", title: "게시물내역 조회" },
    { path: "mychatlist", title: "채팅내역 조회" },
    { path: "comment", title: "댓글내역 조회" },
  ]);
  return (
    <MypageContainer>
      <MypageBox>
        {myPageData.map((data, index) => (
          <Link to={`/mypage/${data.path}`} key={index}>
            <MypageList $isLast={index === myPageData.length - 1}>
              {data.title}
            </MypageList>
          </Link>
        ))}
      </MypageBox>
    </MypageContainer>
  );
};
export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MypageBox = styled.div`
  margin: 15px 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const MypageList = styled.div`
  width: 100%;
  padding: 15px 12px;
  font-weight: 600;
  font-size: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
  ${({ $isLast }) =>
    $isLast &&
    `
    border: none;
  `}
  @media (max-width: 529px) {
    font-size: 14px;
  }
`;
