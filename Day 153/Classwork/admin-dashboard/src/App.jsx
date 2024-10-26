import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import './App.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={
          <div>
            <h1>Welcome! Please register or login.</h1>
            <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;