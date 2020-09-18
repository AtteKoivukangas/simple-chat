const handleLeave = (socket, rooms) => {

  if (socket.roomId) {
    rooms[socket.roomId].delete(socket);

    console.log(`Removed ${socket.username} from room ${socket.roomId}`);

    for (const s of rooms[socket.roomId]) {
      s.emit('USER_DISCONNECTED_FROM_ROOM', {
        username: socket.username
      });
    }

    if (rooms[socket.roomId].size === 0) {
      delete rooms[socket.roomId];
      console.log('Deleted empty room');
    }

    delete socket.username;
    delete socket.roomId;
  }
}

module.exports = handleLeave;