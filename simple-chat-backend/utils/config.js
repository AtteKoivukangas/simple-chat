require('dotenv').config();

const PORT = process.env.PORT;
const ROOM_ID_LENGTH = process.env.ROOM_ID_LENGTH;
const ROOM_ID_CHARACTERS = process.env.ROOM_ID_CHARACTERS;

module.exports = {
  PORT, ROOM_ID_LENGTH, ROOM_ID_CHARACTERS
};