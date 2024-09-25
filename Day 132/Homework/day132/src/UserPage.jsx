import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function UserPage() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name, email);
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>Update User</h3>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserPage;