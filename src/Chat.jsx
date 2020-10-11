import React from 'react';
import './chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';

const Chat = ()=>{
    return(
        <>
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_header_info">
                    <h2> Room Name</h2>
                    <p> Last message</p>
                </div>
                <div className="chat_header_rt">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message ">
                    <span className="name">Anmol</span>
                    A message
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message chat_recieved ">
                    <span className="name">Anmol</span>
                    A message
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message ">
                    <span className="name">Anmol</span>
                    A message
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message ">
                    <span className="name">Anmol</span>
                    A message
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat_footer">
                <IconButton>
                <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit" >send</button>
                </form>
                <IconButton>
                <MicIcon/>
                </IconButton>
            </div>
        </div>
        </>
    )
}
export default Chat;