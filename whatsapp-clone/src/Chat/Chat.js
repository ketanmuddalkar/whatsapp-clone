import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import db from '../firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [roomName, setRoomName] = useState("");
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
        }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >> ", input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header"> {/* Other persons information i.e. profile pic, name etc*/}
                <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Ketan Muddalkar</span>
                    Hello World!
                    <span className="chat__timestamp"> 3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
