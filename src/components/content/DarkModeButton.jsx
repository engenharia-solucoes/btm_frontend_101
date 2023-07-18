import React, { useContext, useState } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from "../redux/ThemeContext";
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeButton = ({ toggle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`w-[20rem] hover:border-transparent bg-transparent text-bondi-blue-500 flex items-center justify-between focus:outline-none`}
      onClick={toggleDarkMode}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center ${ isDarkMode ? 'text-bondi-blue-600 font-semibold' : 'dark text-bondi-blue-500 font-semibold'}`}>
        {isDarkMode ? (
          <FaSun className="-ml-5 mr-5 text-[1.4rem]" />
        ) : (
          <FaMoon className="-ml-5 mr-5 text-[1.4rem]" />
        )}
        {!toggle && !isHovered && (
          <label htmlFor="dark-mode-switch">
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
          </label>
        )}
        {toggle && isHovered && (
          <label
            className={`whitespace-pre absolute opacity-100 translate-x-0 ${ isDarkMode ? 'bg-bondi-blue-600 font-semibold' : 'dark bg-bondi-blue-500 font-semibold'} text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-3 py-2 ml-12 group-hover:duration-500 transition-all`}
          >
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
          </label>
        )}
      </div>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        onColor="#00dcea"
        offColor="#dcdcdc"
        checkedIcon={toggleDarkMode}
        uncheckedIcon={toggleDarkMode}
        handleDiameter={24}
        height={24}
        width={48}
        className={`react-switch ${toggle && 'invisible'}`}
      />
    </button>
  );
};

export default DarkModeButton;