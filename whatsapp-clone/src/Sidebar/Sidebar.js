import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; // Material icon for Account Avatar
import DonutLargeIcon from '@material-ui/icons/DonutLarge'; // Material icon for Status 
import ChatIcon from '@material-ui/icons/Chat'; // Material icon for Chat
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Material icon for more tab
import './Sidebar.css';

function Sidebar() {
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

            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
