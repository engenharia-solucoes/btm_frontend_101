import React, {useEffect, useContext} from 'react';
import { ThemeContext } from "../redux/ThemeContext";

import Cards from '../content/Cards';

const Pesquisar = ({toggle}) => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <section id='pesquisar'>

      <div className='container mx-auto pt-5'>
        <div className='flex flex-col items-center text-center'>
          <h1 className={`font-semibold ${isDarkMode ? '' : 'text-white'}`}>
            My latest work
          </h1>
          <p className={`mt-5 mb-5 max-w-[480px] ${isDarkMode ? '' : 'text-gray-100'}`}>
            Esses são alguns dos meus projetos desenvolvidos na faculdade e fora dela. Espero que aproveitem!!
          </p>
        </div>
        <Cards toggle={toggle}/>
      </div>
    </section>
  );
};

export default Pesquisar;