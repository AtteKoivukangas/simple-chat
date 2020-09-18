import React from 'react';
import { useDispatch } from 'react-redux';
import socket from '../services/messages';

const LeaveRoomButton = () => {
  const dispatch = useDispatch();

  const handleLeaving = async () => {
    socket.emit('LEAVE_ROOM');
    dispatch({ type: 'RESET_REDUX_STORE'})
  };

  return (
    <span id='leave-room-button' onClick={handleLeaving}>
      Leave room
    </span>
  );
};

export default LeaveRoomButton;