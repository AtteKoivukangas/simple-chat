const config = require('../utils/config');

const generateRoomId = () => {
  const randomChar = () => {
    let x = Math.floor(Math.random() * config.ROOM_ID_CHARACTERS.length);
    return config.ROOM_ID_CHARACTERS.charAt(x);
  };

  let generatedId = '';
  for (let i = 0; i < config.ROOM_ID_LENGTH; i++) {
    generatedId += randomChar();
  }

  return generatedId;
};

const createRoom = (socket, rooms, username) => {
  if (username) {
    socket.username = username;
    let roomId;
    
    do {
      roomId = generateRoomId();
    } while (roomId in rooms)

    socket.roomId = roomId;
    rooms[roomId] = new Set([socket]);
    
    console.log(`Created room ${roomId} by ${username}`)

    const dataToReturn = {
      success: true,
      data: {
        username,
        roomId,
        participants: [username]
      }
    }

    socket.emit('JOINED_ROOM', dataToReturn);
  } else {
    if (!username) {
      socket.emit('ERROR_MESSAGE', 'Username is missing');
    }
  }
};

module.exports = createRoom;