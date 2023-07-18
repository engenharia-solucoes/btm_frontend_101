import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Sidebar from './components/layout/Sidebar';
import BackTopBtn from './components/content/BackTopBtn';

import { AnimatePresence  } from 'framer-motion'
import { MessageProvider } from './components/redux/MessageContext';
import { ThemeProvider  } from './components/redux/ThemeContext';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider>
      <div className="w-screen overflow-hidden bg-primary">
        <AnimatePresence>
          <MessageProvider>
            <Router>
              <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Logout" element={<Login />} />
                <Route path="/*" element={<Sidebar />} />
              </Routes>
              <BackTopBtn />
            </Router>
          </MessageProvider>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;