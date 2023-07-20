import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Sidebar from './components/layout/Sidebar';
import BackTopBtn from './components/content/BackTopBtn';

import { AnimatePresence  } from 'framer-motion'
import { MessageProvider } from './components/redux/MessageContext';
import { ThemeProvider  } from './components/redux/ThemeContext';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './components/redux';

function App() {

  const store = configureStore({ reducer: rootReducer });
  
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className={`w-screen overflow-x-hidden bg-tertiary`}>
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
      </Provider>
    </ThemeProvider>
  );
}

export default App;