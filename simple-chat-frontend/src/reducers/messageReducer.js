import shortid from 'shortid';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat(action.message);

    default:
      return state;
  }
};

export const createMessage = (content, username) => {
  return {
    type: 'ADD_MESSAGE',
    message: {
      content, username,
      id: shortid.generate()
    }
  };
};

export default messageReducer;