import React, { useState } from 'react';

const EmailInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
    onChange(email);
  };

  return (
    <div>
      <label>Email:</label>
      <input type="text" value={value} onChange={handleChange} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default EmailInput;
