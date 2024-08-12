import React from 'react';

const DateInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Date:</label>
      <input type="date" value={value} onChange={handleChange} />
    </div>
  );
};

export default DateInput;
