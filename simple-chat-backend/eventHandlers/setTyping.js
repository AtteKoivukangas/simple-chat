const setTyping = (socket, rooms, typing) => {
  if (socket.roomId && rooms[socket.roomId]) {
    for (const s of rooms[socket.roomId]) {
      s.emit('USER_TYPING', { 
        username: socket.username,
        typing
      });
    }
  } else {
    socket.emit('ERROR_MESSAGE', 'You are not in active room, refresh your browser');
  }
};

module.exports = setTyping;