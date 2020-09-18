const sendMessage = (socket, rooms, content) => {
  if (socket.roomId) {
    console.log(`${socket.username} send message to room ${socket.roomId}`);
    for (const s of rooms[socket.roomId]) {
      s.emit('ROOM_MESSAGE', {
        success: true,
        username: socket.username,
        content
      });
    }
  } else {
    socket.emit('ERROR_MESSAGE', 'You are not in active room, refresh your browser');
  }
};

module.exports = sendMessage;