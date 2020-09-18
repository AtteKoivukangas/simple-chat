import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ChatDisplay from './components/ChatDisplay';
import JoinRoomForm from './components/JoinRoomForm';
import StartScreen from './components/StartScreen';
import Notification from './components/Notification';

const App = () => {
  const history = useHistory();
  const roomId = useSelector(state => state.user.roomId);

  useEffect(() => {
    if (roomId) history.push('/room/live');
  }, [roomId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container' id='app'>
      <Notification />
      <Switch>
        <Route path='/' component={StartScreen} exact={true} />

        <Route path='/create' exact={true}>
          <JoinRoomForm action='CREATE_ROOM' />
        </Route>

        <Route path={['/join/:id', '/join']} exact={true}>
          <JoinRoomForm action='JOIN_ROOM' />
        </Route>

        <Route path='/room/live' component={ChatDisplay} exact={true} />
      </Switch>
    </div>
  );
};

export default App;