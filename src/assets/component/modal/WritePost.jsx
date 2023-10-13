import styled from "styled-components";
import { useState } from "react";

import close from "../../images/modal_close.svg";
import { AxiosWritePost } from "../../../api/Board/AxiosWritePost";

const WritePost = ({ closeBtn }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Container>
      <Header>
        <CancelButton onClick={closeBtn}>
          <img src={close} alt="close_button" />
        </CancelButton>
        <Letter>게시글 작성하기</Letter>
      </Header>
      <ContentContainer>
        <ContentBox>
          <ContentHeader placeholder="제목" onChange={handleTitle}></ContentHeader>
          <ContentDetail placeholder="내용을 입력하세요." onChange={handleContent}></ContentDetail>
        </ContentBox>
      </ContentContainer>
      <Footer>
        <Button
          onClick={() => {
            AxiosWritePost({ title, content });
          }}
        >
          완료
        </Button>
      </Footer>
    </Container>
  );
};

export default WritePost;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 370px;
  border-radius: 20px;
  padding: 0px 0px 10px 0px;
  background-color: ${({ theme }) => theme.colors.WHITE};

  @media (max-width: 529px) {
    width: 280px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
  border-bottom: 1px solid #d3d3d3;
  margin-bottom: 20px;
`;

const CancelButton = styled.button`
  width: 25px;
  height: 25px;
`;

const Letter = styled.div`
  display: flex;
  justify-content: center;
  width: 405px;
  height: 21px;
  font-size: 16px;
  padding-right: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 278px;
  background-color: ${({ theme }) => theme.colors.WHITE};

  @media (max-width: 529px) {
    width: 100%;
    height: 231px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 238px;

  @media (max-width: 529px) {
    width: 240px;
  }
`;

const ContentHeader = styled.input`
  width: 410px;
  height: 41px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 10px 10px 0px 0px;
  border-bottom: none;
  resize: none;
  outline: none;
  line-height: 41px;
  padding-left: 10px;
  &::placeholder {
    line-height: 41px;
    color: ${({ theme }) => theme.colors.PURPLE50};
  }

  @media (max-width: 529px) {
    width: 100%;
  }
`;

const ContentDetail = styled.textarea`
  width: 410px;
  height: 197px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 150px;
  resize: none;
  outline: none;
  padding: 10px 0px 0px 10px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.PURPLE50};
  }

  @media (max-width: 529px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 38px;
  border-radius: 0px 0px 20px 20px;

  @media (max-width: 529px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  color: ${({ theme }) => theme.colors.WHITE};
  width: 46px;
  height: 28px;
  border-radius: 20px;
`;
