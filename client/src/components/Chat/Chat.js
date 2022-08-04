import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;
const Chat = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENPOINT = 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);
    socket = io(ENPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join',{name,room})
  }, [ENPOINT, props.location.search]);
  return <div>Chat</div>;
};

export default Chat;
