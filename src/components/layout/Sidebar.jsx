import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { BiChevronLeft } from "react-icons/bi";

import Login from '../pages/Login';
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Registro from '../pages/Registro';

import SidebarData from './SidebarData';
import UserProfile from "./UserProfile";

import DarkModeButton from "../content/DarkModeButton"

import { motion } from 'framer-motion'
import { ThemeContext } from "../redux/ThemeContext";

const Sidebar = () => {

  const [toggle, setToggle] = useState(false)
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    
    <section 
      id='sidebar'
      className={`flex h-screen w-screen ${
        isDarkMode ? 'dark bg-gray-100' : 'bg-tertiary'
      }`}
    >

      {/* Barra lateral */}
      <div className={` ${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>

        {/*Logo*/}
        <UserProfile toggle={toggle} />

        {/* Links da barra lateral */}
        <SidebarData toggle={toggle}/>

        <DarkModeButton />

        {/* Icon da barra lateral */}
        <div className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-gray-100 rounded-full cursor-pointer" onClick={()=> {
          setToggle(!toggle)
        }}>
         <BiChevronLeft
            className={`${
              toggle ? "rotate-180" : ""
            } text-3xl transition-all duration-300`}
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-grow p-8"> 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

          <Routes>
            <Route exact path="/Dashboard" element={<Dashboard />} > </Route>
            <Route path="/Login" element={<Login />} > </Route>
            <Route path="/Registro" element={<Registro />} > </Route>
            <Route path="/Home" element={<Home />} > </Route>
          </Routes>
        </motion.div>
      </div> 

    </section>
  );
};

export default Sidebar;