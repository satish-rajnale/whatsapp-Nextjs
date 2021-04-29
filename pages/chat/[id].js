import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";

function Chat() {
    return (
        <Container>
            <Head>
                <p>Chat</p>
            </Head>
            <Sidebar/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
