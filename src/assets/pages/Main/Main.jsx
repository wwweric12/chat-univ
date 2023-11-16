import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import SmallButton from "../../component/SmallButton";
import Search from "../../component/Search";
import CreateChat from "../../component/modal/CreateChat";
import ChatList from "../../component/ChatList";
import { getChats } from "../../../api/Chat/Chats";
import { getChatSearch } from "../../../api/Chat/ChatSearch";
import { handleResize } from "../../utils/handleResize";

const Main = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const [showCreateChatModal, setShowCreateChatModal] = useState(false);
  const [chats, setChats] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const cleanupResize = handleResize(setLayoutHeight);
    return () => cleanupResize();
  }, []);

  //검색 api
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const newSearchTerm = queryParams.get("q");
  //   setSearchTerm(newSearchTerm || "");

  //   getChatSearch(newSearchTerm, 10, 4)
  //     .then((data) => {
  //       setSearchList(data.conversations);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching chat search:", error);
  //       // 사용자에게 에러를 표시하는 로직 추가 가능
  //     });
  // }, [location.search]);

  //전체 채팅방 내역api
  useEffect(() => {
    getChats()
      .then((data) => {
        setChats(data.chats);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
        // 사용자에게 에러를 표시하는 로직 추가 가능
      });
  }, []);

  const openCreateChatModal = () => {
    setShowCreateChatModal(true);
  };

  const closeCreateChatModal = () => {
    setShowCreateChatModal(false);
  };

  return (
    <Layout height={layoutHeight - 150}>
      <InLayout>
        <Search />

        <ListBox>
          {searchTerm !== undefined && chats.length > 0 ? (
            chats.map((item) => (
              <Link to={`/chatting/${item.chatId}`} key={item.chatId}>
                <ChatListBox>
                  <ChatList title={item.title} content={item.content} />
                </ChatListBox>
              </Link>
            ))
          ) : searchTerm !== undefined && searchList.length > 0 ? (
            searchList.map((item) => (
              <Link to={`/chatting/${item.conversationId}`} key={item.conversationId}>
                <ChatListBox>
                  <ChatList title={item.ask} content={item.answer} />
                </ChatListBox>
              </Link>
            ))
          ) : searchTerm !== undefined && searchList.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            <p>채팅방이 없습니다.</p>
          )}
        </ListBox>
      </InLayout>

      <BLayout>
        <SmallButton text="채팅방 만들기" type="chatting" onClick={openCreateChatModal} />
      </BLayout>

      {showCreateChatModal && (
        <>
          <ModalOverlay onClick={closeCreateChatModal} />
          <ModalLayout>{showCreateChatModal && <CreateChat />}</ModalLayout>
        </>
      )}
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  display: flex;
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
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

const BLayout = styled.div`
  height: 10%;
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 98;
`;

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 20px;
  gap: 30px;
  align-self: stretch;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const ModalLayout = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 67%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 529px) {
    left: 50%;
  }
`;

const ChatListBox = styled.div`
  width: 100%;
`;
