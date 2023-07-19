import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import DarkModeButton from "../content/DarkModeButton"

import { navdatas } from '../../Data';
import { ThemeContext } from "../redux/ThemeContext";

const SidebarData = ({ toggle }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="flex-grow">
      <ul className="space-y-2">
        {navdatas.map((routes, i) => {
          const routePath = `/${routes.name}`;

          return (
            <li
              key={routes.id}
              className={`${
                isDarkMode ? 'text-bondi-blue-600 font-semibold' : 'dark text-bondi-blue-500 font-semibold'
              } ${
                toggle ? 'last:w-[3.6rem]' : 'last:w-[18rem]'
              } sidebar mt-5 last:absolute bottom-6`}
            >
              <Link
                to={routePath}
                className={`${
                  activeIndex === i ? 'text-white' : ''
                }`}
                onClick={() => handleItemClick(i)}
              > 
                <div className="justify-content flex">
                  <div 
                    className="mr-5 text-[1.7rem]"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)} 
                  >
                    {routes.icon}
                  </div>
                  <div
                    style={{
                      transitionDelay: `${toggle ? '0ms' : `${i + 3}00ms`}`,
                    }}
                    className={`whitespace-pre  ${
                      toggle ? 'invisible translate-x-28' : 'duration-500'
                    }`}
                  >
                    {routes.name}
                  </div>
                </div>
              </Link>

              <div
                style={{
                  transitionDelay: toggle && hoveredIndex === i ? '0ms' : `${i + 3}00ms`,
                }}
                className={`whitespace-pre ${
                  toggle && hoveredIndex === i
                    ? `last:ml-[3.2rem] absolute opacity-500 ${ isDarkMode ? 'bg-bondi-blue-600 font-semibold' : 'dark bg-bondi-blue-500 font-semibold'} text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-3 py-2 ml-6 group-hover:duration-500 -translate-x-3 transition-all`
                    : `absolute hidden ${ isDarkMode ? 'bg-bondi-blue-300 font-semibold' : 'dark bg-bondi-blue-300 font-semibold'} text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-3 py-2 ml-6 duration-500 translate-x-28`
                }`}
              >
                {routes.name}
              </div>
            </li>
          );
        })}
      </ul>

      <ul>
        <li 
          className={`${
              toggle ? 'last:w-[3.6rem]' : 'last:w-[18rem]'
            } sidebar mb-6 last:absolute bottom-14`}
          >
          <DarkModeButton toggle={toggle}/>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarData;