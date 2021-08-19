import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Chat.css';

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="chat">
            <div className="chat__header"> {/* Other persons information i.e. profile pic, name etc*/}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
