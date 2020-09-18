/*
  * Jos käyttäjänimi on jo käytössä huoneessa
  * niin lisätään numero nimen perään
  * 
  * ENNEN
  * Online: Atte, Atte, Atte
  * 
  * JÄLKEEN
  * Online: Atte, Atte1, Atte2
*/
const handleDuplicateUsernames = (socket, socketSet) => {
  let extraNum = '';
  for (const s of socketSet) {
    if (socket.username + extraNum === s.username) {
      if (extraNum === '') {
        extraNum = 1;
      } else {
        extraNum++;
      }
    }
  }

  socket.username += extraNum;
};

const joinRoom = (socket, rooms, roomId, username) => {
  if (username && roomId && rooms[roomId]) {
    socket.username = username;
    socket.roomId = roomId;

    handleDuplicateUsernames(socket, rooms[roomId]);

    for (const s of rooms[roomId]) {
      s.emit('USER_CONNECTED_TO_ROOM', { username: socket.username });
    }
    rooms[roomId].add(socket);

    console.log(`${username} joined room ${roomId}`);

    let participants = [];
    for (const s of rooms[roomId]) {
      participants.push(s.username);
    }

    const dataToReturn = {
      success: true,
      data: {
        username: socket.username,
        roomId,
        participants
      }
    }

    socket.emit('JOINED_ROOM', dataToReturn);
  } else {
    if (!username) {
      socket.emit('ERROR_MESSAGE', 'Username missing');
    } else if (!roomId) {
      socket.emit('ERROR_MESSAGE', 'RoomId missing');
    } else if (!rooms[roomId]){
      socket.emit('ERROR_MESSAGE', `Room "${roomId}" doesn't exist`);
    }
  }
};

module.exports = joinRoom;