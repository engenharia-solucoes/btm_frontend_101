import React, { useContext } from 'react';
import { ThemeContext } from "../redux/ThemeContext";

const DarkModeButton = () => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
}

export default DarkModeButton;