import React, { useEffect, useState, useContext } from 'react';

import { MessageContext } from "../redux/MessageContext";
import { ThemeContext } from "../redux/ThemeContext";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Message from '../content/Message';
import Button from "../content/Button";

const Dashboard = () => {
  
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const { message } = useContext(MessageContext);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Estado para controlar a exibição da mensagem
  const [showMessage, setShowMessage] = useState(false);
  const [hasShownMessage, setHasShownMessage] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está autenticado e ainda não mostrou a mensagem
    if (isAuthenticated && !hasShownMessage) {
      setShowMessage(true);

      // Define o timer para ocultar a mensagem após 1200 ms (1.2 segundos)
      const timer = setTimeout(() => {
        setShowMessage(false);
        setHasShownMessage(true);
      }, 1200);

      // Limpa o timer quando o componente for desmontado
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, hasShownMessage]);

  return (
    <section
      id='dashboard'
      className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        {showMessage && (
          <div
            className={`${isDarkMode ? 'bg-teal-100 border-teal-400 text-teal-700' : 'bg-green-100 border-green-400 text-green-700'} border relative px-4 py-3 rounded mb-10`}
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