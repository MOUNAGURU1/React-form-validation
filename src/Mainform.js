import React, { useState } from 'react';
import Name from './Name';
import Number from './Number';
import Email from './Email';
import PasswordInput from './PasswordInput';
import GenderInput from './GenderInput';
import DateInput from './DateInput';

const MainForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && number && email && password && gender && date) {
      alert("successfull")
      alert(`Name: ${name}\nNumber: ${number}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender}\nDate: ${date}`);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Name value={name} onChange={setName} />
      <Number value={number} onChange={setNumber} />
      <Email value={email} onChange={setEmail} />
      <PasswordInput value={password} onChange={setPassword} />
      <GenderInput value={gender} onChange={setGender} />
      <DateInput value={date} onChange={setDate} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MainForm;
