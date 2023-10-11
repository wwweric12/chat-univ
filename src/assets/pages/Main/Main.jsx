import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SmallButton from "../../component/SmallButton";
import Search from "../../component/Search";
import CreateChat from "../../component/modal/CreateChat";
import ChatList from "../../component/ChatList";
import { getChats } from "../../../api/Chat/Chats";

const Main = () => {
  const [layoutHeight, setLayoutHeight] = useState(window.innerHeight);
  const [showCreateChatModal, setShowCreateChatModal] = useState(false);
  const [chats, newChats] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  //전체 채팅방 조회 api
  useEffect(() => {
    getChats()
      .then(data => {
        newChats(data.chats);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLayoutHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openCreateChatModal = () => {
    setShowCreateChatModal(true);
  };

  const closeCreateChatModal = () => {
    setShowCreateChatModal(false);
  };

  console.log(searchResult.length);

  return (
    <Layout height={layoutHeight - 150}>
      <InLayout>
        <Search setSearchResult={setSearchResult} />

        <ListBox>
          {searchResult.length > 0 ? (
            searchResult.map((item) => (
              <Link to={`/chatting/${item.conversationId}`} key={item.conversationId}>
                <ChatListBox>
                  <ChatList title={item.ask} content={item.answer} />
                </ChatListBox>
              </Link>
            ))
          ) : (
            chats.length > 0 &&
            chats.map((item) => (
              <Link to={`/chatting/${item.chatId}`} key={item.chatId}>
                <ChatListBox>
                  <ChatList title={item.title} content={item.content} />
                </ChatListBox>
              </Link>
            ))
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