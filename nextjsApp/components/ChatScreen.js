import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components"
import { auth } from "../firebase";


function ChatScreen({chat, messages}) {
    const router = useRouter();
    const [user] = useAuthState(auth);

    return (
        <Container>
           <Header>
               <Avatar/>
               <HeaderInformation>
                   <h4>rec email</h4>
                   <p>last seen</p>
               </HeaderInformation>
                <HeaderIcons>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </HeaderIcons>
           </Header>
        </Container>
    )
}

export default ChatScreen

const Container  = styled.div``;

const Header  = styled.div`
position: sticky;
background-color:white;
display:flex;
top:0;
z-index: 100;
height:80px;
padding:11px;
align-items:center;
border-bottom:1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
margin-left: 15px;
flex:1;

    >h3{
        margin-bottom:3px;
    }

    >p{
        font-size: 14px;
        color:gray;
    }
`


const HeaderIcons = styled.div``
