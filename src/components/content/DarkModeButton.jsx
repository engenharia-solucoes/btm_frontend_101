import React, { useContext, useState } from 'react';
import { ThemeContext } from "../redux/ThemeContext";
import Switch from 'react-switch';
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
    >
      <div className="flex items-center">
        {isDarkMode ? (
          <FaSun className="-ml-4 mr-5 text-[1.4rem]" />
        ) : (
          <FaMoon className="-ml-4 mr-5 text-[1.4rem]" />
        )}
        {!toggle && (
          <>
            {isHovered ? (
              <label
                className="whitespace-pre absolute opacity-100 translate-x-0 bg-bondi-blue-500 text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-2 py-1 ml-6 group-hover:duration-500 transition-all"
              >
                {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              </label>
            ) : (
              <label htmlFor="dark-mode-switch">
                {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              </label>
            )}
          </>
        )}
      </div>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        onColor="#00dcea"
        offColor="#dcdcdc"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={24}
        height={24}
        width={48}
        className={`react-switch ${toggle && 'invisible'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </button>
  );
};

export default DarkModeButton;
