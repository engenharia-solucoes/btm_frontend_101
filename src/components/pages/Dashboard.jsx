import React, { useState, useEffect, useContext } from 'react';

import { MessageContext } from '../redux/MessageContext';
import { ThemeContext } from "../redux/ThemeContext";

import Button from "../content/Button";

const Dashboard = () => {

  const { message } = useContext(MessageContext);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (message.text) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [message]);

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
      id='dashboard'
      className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>

        {showMessage && (
          <div
            className='bg-green-100 border border-green-400 text-green-700 relative px-4 py-3 rounded mb-10'
            role='alert'
          >
            {message.text}
          </div>
        )}

        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className={`text-lg ${isDarkMode ? 'text-bondi-blue-700' : 'text-bondi-blue-500'} text-md mb-[22px]`}>
              Hey, I'm Samara! 👋
            </p>
            <h1 className={`font-bold ${isDarkMode ? '' : 'text-white'}`} >
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className={`subtitle ${isDarkMode ? '' : 'text-gray-100'}`}>
              Então, que tal conhecer um pouco sobre mim e o meu trabalho...
            </p>
            <Button 
              style={`btn btn-md text-white md:btn-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${isDarkMode ? 'bg-bondi-blue-900 hover:bg-bondi-blue-900 hover:border-bondi-blue-200' : 'bg-heliotrope-500 hover:bg-heliotrope-800 hover:border-heliotrope-200'}`} text="Work with me" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;