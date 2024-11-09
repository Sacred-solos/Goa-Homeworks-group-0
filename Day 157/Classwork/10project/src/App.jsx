import React, { Fragment, useState } from 'react'
import TodoList from './Pages/toDoList'
import Calculator from './Pages/Calculator'
import { BrowserRouter as Router, Routes, Route, Link } from'react-router-dom';

import './App.css'

function App() {
  
  return (
    <>
      <nav>
        <Link to="/">To do list</Link>
        <Link to="/calculator">Calculator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
    
    </>
)}

export default App
