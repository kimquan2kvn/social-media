import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../../components/Conversation/Conversation";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { UilSetting } from "@iconscout/react-unicons";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import "./Chat.css";
const Chat = () => {
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);



  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Kết nối tới socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);
  console.log(onlineUsers)
  // gửi tin nhắn tới server kèm id của ng nhận
  useEffect(()=> {
   if(sendMessage!==null) {
    socket.current.emit("send-message", sendMessage);}
  }, [sendMessage])


  // Lấy tin nhắn từ socket server
  useEffect(()=> {
    socket.current.on("recieve-message", (data)=> {
      console.log(data)
      setReceivedMessage(data);
    })
  },[])

  // kiểm tra trạng thái onl
  const checkOnlineStatus = (chat)=> {
    const chatMember = chat.members.find((member) => member !== user._id)
    const online = onlineUsers.find((user)=> user.userId === chatMember);
    return online ? true : false;
  }

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation online={checkOnlineStatus(chat)} data={chat} currentUser={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div
          className="navIcons"
          style={{ width: "20rem", alignSelf: "flex-end" }}
        >
          <Link to="../home">
            <img src={Home} alt="" />
          </Link>
          <UilSetting />
          <img src={Noti} alt="" />
          <Link to="../chat">
            <img src={Comment} alt="" />
          </Link>
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
