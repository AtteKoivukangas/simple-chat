import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notification);

  if (!notification.message) return null;

  return (
    <div id='notification' className='p-3 box-shadow'>
      <span>{ notification.message }</span>
    </div>
  );
};

export default Notification;