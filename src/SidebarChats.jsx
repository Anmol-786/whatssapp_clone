import React from 'react';
import './sidebarChats.css';
import { Avatar } from '@material-ui/core';

const SidebarChats = ()=>{
    return(
        <>
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebar_info">
                <h2> Room Name</h2>
                <p> Last message</p>
            </div>

        </div>
        </>
    )
}
export default SidebarChats;