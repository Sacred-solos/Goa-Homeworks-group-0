import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Profile = ({ name, surname, email, password }) => {
  const theme = useContext(ThemeContext);

  const profileStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={profileStyle}>
      <h3>{name} {surname}</h3>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;