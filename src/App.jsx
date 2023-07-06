import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Hero } from './components/pages/Hero'
import Sidebar from './components/layout/Sidebar'
import { Footer } from './components/layout/Footer'
import BackTopBtn from './components/content/BackTopBtn';

function App() {

  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Hero />} > </Route>
        </Routes>
        <Footer/>
        <BackTopBtn />
      </Router>
    </div>
  )
}

export default App