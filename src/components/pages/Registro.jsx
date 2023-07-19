import React, {useEffect, useContext} from 'react';
import { ThemeContext } from "../redux/ThemeContext";

const Registro = () => {

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
      id='registro'
      className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className={`text-lg ${isDarkMode ? 'text-bondi-blue-700' : 'text-bondi-blue-500'} text-md mb-[22px]`}>
              Outra página
            </p>
            <h1 className={`font-bold ${isDarkMode ? '' : 'text-white'}`}>
              Registro
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registro;