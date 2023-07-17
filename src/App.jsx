import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Sidebar from './components/layout/Sidebar';
import BackTopBtn from './components/content/BackTopBtn';

import { AnimatePresence  } from 'framer-motion'

function App() {
  return (
      <div className="w-screen overflow-hidden bg-primary">
        <AnimatePresence>
          <Router>
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Logout" element={<Login />} />
              <Route path="/*" element={<Sidebar />} />
            </Routes>
            <BackTopBtn />
          </Router>
        </AnimatePresence>
      </div>
  );
}

export default App;