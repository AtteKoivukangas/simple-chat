import socketIOClient from 'socket.io-client';
import store from '../store';
import { createMessage } from '../reducers/messageReducer';
import { setUsername, setRoomId } from '../reducers/userReducer';
import { initializeParticipants, addParticipant, removeParticipant, setParticipantTyping } from '../reducers/participantReducer';
import { setNotification } from '../reducers/notificationReducer';
const baseUrl = '/';

const socket = socketIOClient(baseUrl);

const displayError = (message, time_ms) => {
  store.dispatch( setNotification(message, time_ms) );
};

const isOtherClient = username => {
  const myUsername = store.getState().user.username;
  return myUsername !== username;
};

socket.on('ROOM_MESSAGE', ({ username, content }) => {
  if (isOtherClient(username)) {
    store.dispatch( createMessage(content, username) );
  }
});

socket.on('USER_CONNECTED_TO_ROOM', ({ username }) => {
  store.dispatch( addParticipant(username) );
  store.dispatch( createMessage(`${username} connected`) );
});

socket.on('USER_DISCONNECTED_FROM_ROOM', ({ username }) => {
  store.dispatch( removeParticipant(username) );
  store.dispatch( createMessage(`${username} disconnected`) );
});

socket.on('USER_TYPING', ({ username, typing }) => {
  if (isOtherClient(username)) {
    store.dispatch( setParticipantTyping(username, typing) );
  }
});

socket.on('ERROR_MESSAGE', message => {
  displayError(message);
});

socket.on('connect_error', () => {
  displayError('Server is down', 10000);
});

socket.on('JOINED_ROOM', body => {
  const { username, roomId, participants } = body.data;

  store.dispatch( setUsername(username) );
  store.dispatch( setRoomId(roomId) );
  store.dispatch( initializeParticipants(participants) );
});

export default socket;