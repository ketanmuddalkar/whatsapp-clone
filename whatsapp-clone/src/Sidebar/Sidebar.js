import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'; // Material icon for Status 
import ChatIcon from '@material-ui/icons/Chat'; // Material icon for Chat
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Material icon for more tab
import SearchIcon from '@material-ui/icons/Search'; // Material icon for Search
import SidebarChat from '../SidebarChat/SidebarChat';
import db from '../firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ));

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" name="" id="" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room =>
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                )}
            </div>
        </div>
    )
}

export default Sidebar
