import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";

function Chat() {
    return (
        <Container>
            <Head>
                <p>Chat</p>
            </Head>
            <Sidebar/>
            <ChatContainer >
                <ChatScreen/>
            </ChatContainer>
        </Container>
    )
}

export default Chat

const Container = styled.div`
  display: flex;

  padding: 15px;
  word-break: break-word;


`;

const ChatContainer = styled.div`
flex:1;
overflow: scroll;
height: 100vh;

::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style:none;
scrollbar-width:none;
`;