import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UsersOnlineLabel from './UsersOnlineLabel';
import RoomIdLabel from './RoomIdLabel';
import LeaveRoomButton from './LeaveRoomButton';
import MessageInput from './MessageInput';
import UsersTypingLabel from './UsersTypingLabel';
import MessageList from './MessageList';

const ChatDisplay = () => {
  const history = useHistory();
  const roomId = useSelector(state => state.user.roomId);
  const [messagesEnd, setMessagesEnd] = useState(null);
  const messages = useSelector(state => state.messages);

  if (!roomId) {
    history.push('/')
  }

  useEffect(() => {
    if (messagesEnd) {
      messagesEnd.scrollIntoView();
    }
  }, [messages, messagesEnd]);

  return (
    <div className='message-display mx-auto'>
      <LeaveRoomButton />
      <div className="p-3 mb-3 bg-white rounded box-shadow">
        <UsersOnlineLabel />

        <div className='message-board'>
          <MessageList messages={messages} />
          <div ref={el => setMessagesEnd(el)}></div>
        </div>

        <UsersTypingLabel />
        <MessageInput />
      </div>
      <RoomIdLabel />
    </div>
  );
};

export default ChatDisplay;