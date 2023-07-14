import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Hero from './components/pages/Hero';
import Sidebar from './components/layout/Sidebar';
import BackTopBtn from './components/content/BackTopBtn';

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-200">
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/Dashboard/Login" element={<Login />} />
          <Route path="/Dashboard/Logout" element={<Login />} />
          <Route path="/Dashboard/*" element={<Sidebar />} />
        </Routes>
        <BackTopBtn />
      </Router>
    </div>
  
  );
}

export default App;