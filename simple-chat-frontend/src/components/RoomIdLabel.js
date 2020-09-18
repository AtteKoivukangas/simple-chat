import React from 'react';
import { useSelector } from 'react-redux';
import { copyToClipBoard } from '../utils/methods';

const RoomIdLabel = () => {
  const roomId = useSelector(state => state.user.roomId);

  const copyLinkToClipBoard = () => {
    const link = `${window.location.host}/join/${roomId}`;
    copyToClipBoard(link);
  };
  
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Room ID</span>
      </div>
      <div className="input-group-append">
        <span className="input-group-text bg-white">{ roomId }</span>
        <button className="btn btn-outline-primary" type="button" onClick={copyLinkToClipBoard}>Copy link</button>
      </div>
    </div>
  );
};

export default RoomIdLabel;