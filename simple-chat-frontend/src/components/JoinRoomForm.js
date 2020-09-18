import React, { useState } from 'react';
import socket from '../services/messages';
import { Link, useParams } from 'react-router-dom';

import TextInput from './TextInput';

const JoinRoomForm = ({ action /* 'CREATE_ROOM' tai 'JOIN_ROOM'*/}) => {
  const roomIdFromURI = useParams().id;
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState(roomIdFromURI || '');

  const handleSubmit = ev => {
    ev.preventDefault();
    
    socket.emit(action, {
      username,
      roomId: roomId.trim()
    });
  };

  const submitButtonData = () => {
    let data = {
      msg: '',
      disabled: true
    };

    if (username.length < 3) {
      data.msg = 'Enter atleast 3 letters';
    } else {
      data.msg = action === 'CREATE_ROOM'
        ? 'Create room'
        : 'Join room';

      data.disabled = false;
    }

    return data;
  }

  const buttonType = action === 'CREATE_ROOM' ? 'success' : 'primary';

  return (
    <div>
      <div className='header-background'>
        <Link className='pl-3' to='/'>back</Link>

        <div className='header'>
          <h1>Enter a username</h1>
        </div>
      </div>
      
      <form className='text-center mt-3' onSubmit={handleSubmit}>
        <TextInput
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder={'Username'}
          prependText={'@'}
          required={true}
        />

        { action === 'JOIN_ROOM' &&
          <TextInput
            value={roomId}
            onChange={({ target }) => setRoomId(target.value)}
            placeholder={'ID'}
            prependText={'Room ID'}
            required={true}
          />
        }

        <button
          type='submit'
          disabled={submitButtonData().disabled}
          className={`btn btn-${buttonType} btn-lg`}
        >
          { submitButtonData().msg }
        </button>
      </form>
    </div>
  );
};

export default JoinRoomForm;