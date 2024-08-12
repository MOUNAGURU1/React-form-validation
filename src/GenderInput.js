import React from 'react';

const GenderInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Gender:</label>
      <select value={value} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default GenderInput;
