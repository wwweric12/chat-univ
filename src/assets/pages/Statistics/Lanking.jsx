import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Lanking = () => {
  const lankingData = [
    { id: 1, content: "검색어1" },
    { id: 2, content: "검색어2" },
    { id: 3, content: "검색어3" },
    { id: 4, content: "검색어4" },
    { id: 5, content: "검색어5" },
  ];

  const location = useLocation();

  const handleClick = (content) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("q", content);
  
    const searchParams = queryParams.toString();
    const searchPath = `/?${searchParams}`;
  
    // 이동할 경로로 이동
    window.location.href = searchPath;
  };
  
  

  return (
    <Layout>
      <TitleLayout>
        <TitleBox>명지대 실시간 랭킹</TitleBox>
      </TitleLayout>
      <LankingLayout>
        {lankingData.map((item) => (
          <LankingBox
            key={item.id}
            onClick={() => handleClick(item.content)}
          >
            {item.id}. {item.content}
          </LankingBox>
        ))}
      </LankingLayout>
    </Layout>
  );
};

export default Lanking;

const Layout = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.PURPLE10};
`

const TitleLayout = styled.div`
  display: flex;
  width: 300px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

const TitleBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const LankingLayout = styled.div`
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
`

const LankingBox = styled(Link)`
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PURPLE100};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: ${({ theme }) => theme.colors.PURPLE100};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`
