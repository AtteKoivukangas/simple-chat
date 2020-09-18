import React, { useState, useEffect } from 'react';
import { useField } from '../hooks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createMessage } from '../reducers/messageReducer';
import { setTyping } from '../reducers/userReducer';
import socket from '../services/messages';

const MessageInput = () => {
  const dispatch = useDispatch();
  const message = useField('text');
  const user = useSelector(state => state.user);
  const [timeoutId, setTimeoutId] = useState('');

  useEffect(() => {
    // Suoritetaan kun user.typing arvo muuttuu
    socket.emit('SET_TYPING', {
      typing: user.typing
    });
  }, [user.typing]);

  const handleSubmit = ev => {
    ev.preventDefault();
    if (!message.value.trim()) return;

    dispatch( setTyping(false) );
    dispatch( createMessage(message.value, user.username) );
    socket.emit('SEND_MESSAGE', message.value);
    message.reset();
  };

  const handleTyping = ({ key }) => {
    if (key === 'Enter') return;

    dispatch( setTyping(true) );

    const id = setTimeout(() => {
      dispatch( setTyping(false) );
    }, 1000);

    clearTimeout(timeoutId);
    setTimeoutId(id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mt-2">
        <input
          className="form-control"
          placeholder={`@${user.username}`}
          {...message.parseForInput()}
          required
          onKeyDown={handleTyping}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Send</button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;