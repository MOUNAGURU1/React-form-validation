import React, { useState } from 'react';

function Number({ value, onChange }) {
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const number = e.target.value;
    if (!number) {
      setError('Number is required');
    } else if (!/^\d+$/.test(number)) {
      setError('Number must be numeric');
    } 
    else if (number.length<10) {
        setError('Number must be 10 character');
    }
        else {
      setError('');
    }
    onChange(number);
  };

  return (
    <div>
      <label>Number:</label>
      <input type="text" value={value} onChange={handleChange} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default NumberInput;
