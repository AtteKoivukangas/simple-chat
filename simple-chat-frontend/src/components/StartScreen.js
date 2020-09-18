import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const StartScreen = () => {
  const history = useHistory();

  return (
    <div className='text-center'>
      <div className='header-background'>
        <div className='header'>
          <h1>Simple chat</h1>
          <p>Setup chat in seconds</p>
        </div>
      </div>
      
      <div className='p-5'>
        <Button variant='success' size='lg' onClick={() => history.push('/create')}>Create</Button>{' '}
        <Button variant='primary' size='lg' onClick={() => history.push('/join')}>Join</Button>
      </div>
    </div>
  );
};

export default StartScreen;