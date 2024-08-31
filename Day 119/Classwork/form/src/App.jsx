import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      friends: []  
    };
    setUsers([...users, newUser]);
    e.target.reset();
  };

  const addFriend = (index) => {
    const friendName = prompt("Enter friend's name:");
    if (friendName) {
      users[index].friends.push(friendName);
      setUsers([...users]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="surname" placeholder="Surname" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {user.surname} - {user.email}
            <button onClick={() => addFriend(index)}>Add Friend</button>
            <ul>
              {user.friends.map((friend, friendIndex) => (
                <li key={friendIndex}>{friend}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;