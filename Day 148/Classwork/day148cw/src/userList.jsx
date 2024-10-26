import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.thisurlisdefinitelywrong12345.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    throw new Error(error);
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;