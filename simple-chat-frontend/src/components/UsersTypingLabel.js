import React from 'react';
import { useSelector } from 'react-redux';

const UsersTypingLabel = () => {
  const typingUsers = useSelector(state =>
    state.participants
  ).filter(p => p.typing);
  const usernames = typingUsers.map(p => p.username);

  let text = '';
  if (usernames.length === 1) {
    text = `${usernames[0]} is typing...`;
  } else if (usernames.length === 2) {
    text = `${usernames[0]} and ${usernames[1]} are typing...`;
  } else if (usernames.length > 2){
    text = `${usernames[0]} and ${usernames.length - 1} others are typing...`;
  }

  return (
    <div>
      <span id='typing-label'>{ text }</span>
    </div>
  );
};

export default UsersTypingLabel;