import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";
import { db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";

function Chat({chat, messages}) {
    return (
        <Container>
            <Head>
                <title>Chat with {getRecipientEmail(chat.users, user)}</title>
            </Head>
            <Sidebar/>
            <ChatContainer >
                <ChatScreen chat={chat} messages={messages} />
            </ChatContainer>
        </Container>
    )
}

export default Chat

// context allows to accessm url anything on server
export async function getServerSideProps(context){
    const ref = db.collection("chats").doc(context.query.id)

    const msgResponse  = await ref.collection("chats")
                                .orderBy("timestamp", "asc")
                                .get();

    const messages = msgResponse.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })).map(messages => ({
        ...messages,
        timestamp : messages.timestamp.toDate().getTime()
    }));

    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

console.log(chat, messages)
    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    }
}

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