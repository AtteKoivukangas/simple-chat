const initialState = {
  username: '',
  roomId: '',
  typing: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.username };

    case 'SET_ROOM_ID':
      return { ...state, roomId: action.roomId };

    case 'SET_TYPING':
      return { ...state, typing: action.typing };

    default:
      return state;
  }
};

export const setUsername = username => {
  return {
    type: 'SET_USERNAME',
    username
  };
};

export const setRoomId = roomId => {
  return {
    type: 'SET_ROOM_ID',
    roomId
  };
};

export const setTyping = isTyping => {
  return {
    type: 'SET_TYPING',
    typing: isTyping
  };
};

export default userReducer;