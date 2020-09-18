import React from 'react';

const TextInput = ({
  value,
  onChange,
  placeholder = '',
  prependText,
  required = false
}) => {

  return (
    <div className='react-input'>
      <div className="input-group mb-3">

        { prependText &&
          <div className="input-group-prepend">
            <span className="input-group-text">{prependText}</span>
          </div>
        }
        
        <input
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
          required={required}
        />

      </div>
    </div>
  );
};

export default TextInput;