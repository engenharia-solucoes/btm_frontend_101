import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Sidebar from './components/layout/Sidebar';
import BackTopBtn from './components/content/BackTopBtn';

function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
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