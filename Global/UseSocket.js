import * as React from 'react';
import { io } from "socket.io-client";
import { Ipv4 } from './Ipv4';


export default UseSocket=(idSrc)=>{
  // variables
  const [socket,setSocket] = React.useState();
  const [response, setResponse] = React.useState("ndjwn");
  const [newMessage, setNewMessage] = React.useState();
  const [comts, setComment] = React.useState();
  const [newStory, setNewStory] = React.useState(false);
  const joinRoom = React.useCallback(
    (room) => {
      socket.emit("join", room);
    },
    [socket]
  );
  const sendMessage = React.useCallback(
    (payload) => {
      socket.emit("sendTo", [payload.idSrc,payload.idDest,payload.content]);
    },
    [socket]
  );
  const leaveRoom = React.useCallback(
    (room) => {
      socket.emit("leaveRoom", room);
    },
    [socket]
  );
  const comment = React.useCallback(
    (payload) => {
      // console.log("comment :"[payload.idPost,payload.idUser,payload.comment])
      socket.emit("comment", [payload.idPost,payload.idUser,payload.comment]);
    },
    [socket]
  );
  const addStory = React.useCallback(
    (payload) => {
      socket.emit("newStoryMade", "test");
    },
    [socket]
  );
  React.useEffect(() => {
    const s =(io("http://"+Ipv4+":3000", {
      reconnection: false
    }));
    setSocket(s)
    s.on("connect", () => {
      console.log("connected");
    });
    s.on("searchUser",(val)=>{
      console.log("broadcast for the user :"+val.idDest)
      if(val.idDest=idSrc) {
        // socket.emit("join",val.room);
        // console.log("the user "+val.idDest+" has joined the room : "+val.room)
        setNewMessage(val)
        console.log(val)
      }
    });
    s.on("showMessage",(val)=>{
      alert(val)
      console.log('message received :'+val.room)
      setResponse(val.content);
    });
    s.on("newComment",(val)=>{
      console.log("new comment")
      setComment(val)
    })
    s.on("newStory",(val)=>{
      console.log("new story made")
      setNewStory(true)
    })
    
    return () => {
      s.disconnect();
    };
  }, []);
  return {joinRoom,leaveRoom,sendMessage,response,newMessage,comment,comts,addStory,setNewStory,newStory};
}