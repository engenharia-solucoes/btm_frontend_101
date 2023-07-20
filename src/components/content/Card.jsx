import React, {useEffect, useContext} from 'react';
import { ThemeContext } from "../redux/ThemeContext";

const Card = ({ item, toggle}) => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
        <a href={item.href} target='_black'>
            {<img 
              className='rounded-2xl w-full h-full object-cover' 
              style={{
                width: toggle ? '350px' : '350px',
                height: '280px',
              }}               
              src={item.image} alt='' 
            />}
        </a>
      </div>
      <p className={`capitalize ${isDarkMode ? 'text-bondi-blue-700' : 'text-bondi-blue-500'} text-sm mb-3`}>
        {item.category}
      </p>
      <h3 className={`text-2xl ${isDarkMode ? '' : 'text-white'} capitalize mb-3`}>
        {item.name}
      </h3>
      <p className={`max-w-md ${isDarkMode ? '' : 'text-white'} capitalize mb-3`}>
        {item.description}
      </p>
    </div>
  );
};

export default Card;