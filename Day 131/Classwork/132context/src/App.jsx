import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Services from './components/services.jsx';
import Products from './components/products.jsx';

function App() {
  return (
    <ThemeProvider>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;