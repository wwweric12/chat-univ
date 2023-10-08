import styled from "styled-components";
import { useState, useEffect } from "react";

import BoardPost from "../../component/BoardPost";
import SmallButton from "../../component/SmallButton";
import WritePost from "../../component/modal/WritePost";

import { AxiosPostList } from "../../../api/Board/AxiosPostList";

const Post = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setLayoutHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openWriteModal = () => {
    setShowWriteModal(true);
  };

  const closeWriteModal = () => {
    setShowWriteModal(false);
  };

  const fetchData = async () => {
    try {
      const response = await AxiosPostList();
      setPostList(response?.boards);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BoardArea height={layoutHeight - 150}>
        <InLayout>
          <BoardName>게시판</BoardName>
          <BoardBox>
            <BoardDetail>
              {postList.map((item, idx) => (
                <BoardPost key={item.boardId} id={idx} dataContents={item} />
              ))}
            </BoardDetail>
          </BoardBox>
        </InLayout>
        <ButtonArea>
          <SmallButton type="board" text="게시글 작성하기" onClick={openWriteModal} />
        </ButtonArea>
        {showWriteModal && (
          <>
            <BackGround />
            <ModalBox>{showWriteModal && <WritePost closeBtn={closeWriteModal} />}</ModalBox>
          </>
        )}
      </BoardArea>
    </>
  );
};

export default Post;

const BoardArea = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
  height: ${(props) => props.height}px;
`;

const InLayout = styled.div`
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  height: 90%;
`;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const ModalBox = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 529px) {
    left: 20%;
  }

  @media (max-width: 420px) {
    left: 14%;
  }

  @media (max-width: 387px) {
    left: 12%;
  }
  @media (max-width: 318px) {
    left: 6%;
  }
`;

const ButtonArea = styled.div`
  height: 10%;
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 98;
`;

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  overflow-y: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const BoardName = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  width: 76px;
  height: 48px;
  font-size: 20px;
  font-weight: 700;
`;

const BoardDetail = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
`;
