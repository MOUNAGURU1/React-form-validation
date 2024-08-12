import React, { useState } from 'react';

const PasswordInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const password = e.target.value;
    const capitalLetter = /[A-Z]/;
    const smallLetter = /[a-z]/;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    
    if (!password) {
      setError('Password is required');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (!capitalLetter.test(password)) {
      setError('Password must contain at least one capital letter');
    } else if (!smallLetter.test(password)) {
      setError('Password must contain at least one small letter');
    } else if (!specialCharacter.test(password)) {
      setError('Password must contain at least one special character');
    } else {
      setError('');
    }
    onChange(password);
  };

  return (
    <div>
      <label>Password:</label>
      <input type="password" value={value} onChange={handleChange} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default PasswordInput;
