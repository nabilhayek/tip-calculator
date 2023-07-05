import React from 'react';
import './TextInput.css';

const TextInput = ({ icon }) => {
  return (
    <div className='text-input-wrapper'>
      <span>{icon}</span>
      <input className='text-input' type='number' />
    </div>
  );
};

export default TextInput;
