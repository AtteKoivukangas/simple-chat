const initialState = {
  message: '',
  timeoutID: ''
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      if (state.timeoutID) {
        clearTimeout(state.timeoutID);
      }

      return {
        message: action.data.message,
        timeoutID: action.data.timeoutID
      }

    case 'CLEAR_NOTIFICATION':
      return initialState;

    default:
      return state;
  }
};

export const setNotification = (message, time_ms = 3000) => {
  return dispatch => {
    const timeoutID = setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, time_ms);

    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        message,
        timeoutID
      }
    });
  }
};

export default notificationReducer;