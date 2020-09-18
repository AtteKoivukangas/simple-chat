const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

// Event handlers
const leaveRoom = require('./eventHandlers/leaveRoom');
const createRoom = require('./eventHandlers/createRoom');
const joinRoom = require('./eventHandlers/joinRoom');
const sendMessage = require('./eventHandlers/sendMessage');
const setTyping = require('./eventHandlers/setTyping');

let rooms = [];

io.on('connection', (socket => {
  console.log('User connected. Online:', io.engine.clientsCount);

  socket.on('CREATE_ROOM', ({ username }) =>
    createRoom(socket, rooms, username)
  );

  socket.on('JOIN_ROOM', ({ roomId, username }) =>
    joinRoom(socket, rooms, roomId, username)
  );

  socket.on('SEND_MESSAGE', content =>
    sendMessage(socket, rooms, content)
  );

  socket.on('SET_TYPING', ({ typing }) =>
    setTyping(socket, rooms, typing)
  );

  socket.on('LEAVE_ROOM', () => leaveRoom(socket, rooms, 'LEAVE_ROOM'));
  socket.on('disconnect', () => leaveRoom(socket, rooms, 'USER_DISCONNECTED'));
}));

server.listen(config.PORT, () => {
  console.log('listening on *:', config.PORT);
});