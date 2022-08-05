import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;
const Chat = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENPOINT = 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);
    socket = io(ENPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room }, () => {
      // alert(error);
      // console.log(error, 'ini error');
    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENPOINT, props.location.search]);
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)} />
      </div>
    </div>
  );
};

export default Chat;
