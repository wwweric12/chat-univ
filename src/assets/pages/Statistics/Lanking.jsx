import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getStatistics } from "../../../api/Statistics/SearchStatistics";
import { handleResize } from "../../utils/handleResize";

const Lanking = () => {
  const [data, setData] = useState("");
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanupResize = handleResize(setLayoutHeight);
    return () => cleanupResize();
  }, []);

  useEffect(() => {
    getStatistics()
      .then((data) => {
        setData(data.statistics);
      })
      .catch((error) => {
        setData(error.response.data);
      });
  }, []);

  const handleClick = (word) => {
    navigate(`/?q=${word}`);
  };

  return (
    <Layout height={layoutHeight - 150}>
      <TitleLayout>
        <TitleBox>명지대 실시간 랭킹</TitleBox>
      </TitleLayout>

      <LankingLayout>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, idx) => (
            <LankingBox key={idx + 1} onClick={() => handleClick(item.word)}>
              {idx + 1}. {item.word}
            </LankingBox>
          ))
        ) : (
          <Pdiv>{data}</Pdiv>
        )}
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
  height: ${(props) => props.height}px;
  overflow-y: auto;
`;

const TitleLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 529px) {
    font-size: 16px;
  }
`;

const LankingLayout = styled.div`
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
  height: ${(props) => props.height}px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const LankingBox = styled.div`
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

  &:hover {
    background: ${({ theme }) => theme.colors.PURPLE100};
    color: ${({ theme }) => theme.colors.WHITE};
  }

  @media (max-width: 529px) {
    font-size: 14px;
  }
`;

const Pdiv = styled.div`
  padding: 10px 15px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 10px;
`;
