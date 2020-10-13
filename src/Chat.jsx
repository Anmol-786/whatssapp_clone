import React, { useState } from 'react';
import './chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';
import axios from './axios';

const Chat = ({messages})=>{

    const [input,setInput] = useState("");

    const send_message = async(e)=>{
        e.preventDefault();
        await axios.post("messages/new",{
            name:"Anmol",
            message:input,
            timestamp:new Date().toUTCString(),
            received:false
        })
        setInput('');
    };

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
                {messages.map((message)=>(
                    <p className={`chat_message ${message.received && "chat_recieved"}`}>
                    <span className="name">{message.name}</span>
                    {message.message}
                    <span className="chat_time">{new Date().toUTCString()}</span>
                </p>
                ))}
            </div>
            <div className="chat_footer">
                <IconButton>
                <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input value = {input} 
                    onChange ={(e)=> setInput(e.target.value)}
                    type="text" placeholder="Type a message"/>
                    <button onClick={send_message} type="submit" >send</button>
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