import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js';
import axios from './axios';


function App() {

  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(resposnse =>{
      setMessages(resposnse.data);
    })
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('f75c5d8880e10edcb095', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
      setMessages([...messages,newMessages])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages])
console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
