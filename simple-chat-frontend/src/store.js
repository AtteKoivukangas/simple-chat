import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import messageReducer from './reducers/messageReducer';
import participantReducer from './reducers/participantReducer';
import notificationReducer from './reducers/notificationReducer';

const appReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
  participants: participantReducer,
  notification: notificationReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_REDUX_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;