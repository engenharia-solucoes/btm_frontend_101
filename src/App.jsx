import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './components/layout/Sidebar'
import BackTopBtn from './components/content/BackTopBtn';

function App() {

  return (
    <div className='flex h-screen w-full bg-gray-200'>
      <Router>
        <Sidebar />
        <BackTopBtn />
      </Router>
    </div>
  )
}

export default App