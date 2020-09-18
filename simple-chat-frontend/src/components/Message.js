import React from 'react';

const Message = ({ username, contents }) => {
  const rows = () => contents.map((content, i) => 
    <span className='d-block' key={i}>{ content }</span>
  );

  return (
    <div className={`pt-3 text-left`}>
      <p className="pb-3 mb-0 border-bottom border-gray">
        { username &&
          <strong className="d-block text-gray-dark">
            { username }
          </strong>
        }
        { rows() }
      </p>
    </div>
  );
};

export default Message;