import styled from "styled-components";
import BoardPost from "../../component/BoardPost";
import SmallButton from "../../component/SmallButton";
const Post = () => {
  const dataContents = [
    {
      id: "0",
      title: "title1",
      content: "text1",
      date: "2023.07.06 17:05",
    },
    {
      id: "1",
      title: "title2",
      content: "text2",
      date: "2023.07.06 20:22",
    },
    {
      id: "2",
      title: "title3",
      content: "text3",
      date: "2023.07.06 23:11",
    },
    {
      id: "3",
      title: "title4",
      content: "text4",
      date: "2023.07.06 23:11",
    },
    {
      id: "4",
      title: "title5",
      content: "text5",
      date: "2023.07.06 23:11",
    },
    {
      id: "5",
      title: "title6",
      content: "text6",
      date: "2023.07.06 23:11",
    },
    {
      id: "6",
      title: "title7",
      content: "text7",
      date: "2023.07.06 23:11",
    },
    {
      id: "7",
      title: "title8",
      content: "text8",
      date: "2023.07.06 23:21",
    },
    {
      id: "8",
      title: "title9",
      content: "text9",
      date: "2023.07.07 11:11",
    },
  ];

  return (
    <BoardArea>
      <BoardName>게시판</BoardName>
      <BoardBox>
        <BoardDetail>
          {dataContents.map((item, idx) => (
            <BoardPost key={item.id} id={idx} dataContents={item} />
          ))}
        </BoardDetail>
      </BoardBox>
      <SmallButton type="board" text="게시글 작성하기" />
    </BoardArea>
  );
};

export default Post;

const BoardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 510px;
  height: 935px;
`;

const BoardBox = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  width: 490px;
  height: 758px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  margin-bottom: auto;
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
  width: 480px;
  height: 100px;
`;