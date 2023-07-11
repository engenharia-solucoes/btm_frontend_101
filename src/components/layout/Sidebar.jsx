import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { BiChevronLeft } from "react-icons/bi";

import Hero from '../pages/Hero'
import Registro from '../pages/Registro';

import SidebarData from './SidebarData';
import UserProfile from "./UserProfile";

const Sidebar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    
    <div className="flex h-screen w-screen bg-gray-200">

      {/* Barra lateral */}
      <div className={` ${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>

        {/*Logo*/}
        <UserProfile toggle={toggle} />

        {/* Links da barra lateral */}
        <SidebarData toggle={toggle}/>

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
       <Routes>
          <Route exact path="/" element={<Hero />} > </Route>
          <Route exact path="/registro" element={<Registro />} > </Route>
        </Routes>
      </div> 

    </div>
  );
};

export default Sidebar;