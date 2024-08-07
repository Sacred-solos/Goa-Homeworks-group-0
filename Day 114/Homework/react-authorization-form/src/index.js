import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Contact() {
  const password = 'goabest';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent form submission
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  return (
    <div id="authorization">
      <h1>Contact</h1>
      {authorized ? (
        <ul>
          <li>client@example.com</li>
          <li>555.555.5555</li>
        </ul>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);