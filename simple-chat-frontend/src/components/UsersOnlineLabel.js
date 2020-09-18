import React from 'react';
import { useSelector } from 'react-redux';

const UsersOnlineLabel = () => {
  const participants = useSelector(state => state.participants).map(p => p.username);

  return (
    <div className='border-bottom'>
      <span style={{ color: 'blue'}}>Online: </span>
      { participants.join(', ')}
    </div>
  );
};

export default UsersOnlineLabel;