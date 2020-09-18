const participantReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_PARTICIPANTS':
      return action.participants;

    case 'SET_PARTICIPANT_TYPING':
      return state.map(p =>
        p.username !== action.data.username 
          ? p 
          : { ...p, typing: action.data.typing }
      );

    case 'ADD_PARTICIPANT':
      return state.concat(action.participant);

    case 'REMOVE_PARTICIPANT':
      return state.filter(p => p.username !== action.username);

    default:
      return state;
  }
};

export const initializeParticipants = usernames => {
  const toParticipant = username => {
    return {
      username,
      typing: false
    };
  };

  return {
    type: 'INIT_PARTICIPANTS',
    participants: usernames.map(username =>
      toParticipant(username)
    )
  };
};

export const setParticipantTyping = (username, typing) => {
  return {
    type: 'SET_PARTICIPANT_TYPING',
    data: {
      username, typing
    }
  };
};

export const addParticipant = username => {
  return {
    type: 'ADD_PARTICIPANT',
    participant: {
      username,
      typing: false
    }
  };
};

export const removeParticipant = username => {
  return {
    type: 'REMOVE_PARTICIPANT',
    username
  };
};

export default participantReducer;