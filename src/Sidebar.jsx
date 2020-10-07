import React from 'react';
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
const Sidebar = ()=>{
    return (
        <>
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src='https://i.pinimg.com/736x/a3/0d/02/a30d02849fcf2e153118fe787e3d0952.jpg'/>
                <div className="sidebar_header_rt">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <AddIcon/>
                </IconButton>
                <IconButton>
                <MoreHorizIcon/>
                </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchIcon/>
                    <input type="text" placeholder="Search or Start a new Chat"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;