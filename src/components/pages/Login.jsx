import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
import { authenticate } from '../content/Auth';

import {motion} from 'framer-motion'

const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const flipVariants = {
  initial: { rotateY: 180 },
  animate: { rotateY: 0 },
  exit: { rotateY: 180 },
};

const slideVariants = {
  initial: { x: '-100%' },
  animate: { x: '0%' },
  exit: { x: '100%' },
};

const scaleVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const bounceVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'bounce' } },
  exit: { scale: 0, opacity: 0 },
};

const textVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
      // Lógica de autenticação bem-sucedida
      setError('');
      navigate('/Dashboard'); // Redirecionar para a página do sidebar
    } catch (error) {
      // Lógica de autenticação falhou
      setError(error);
  
      // Limpar o erro após 3 segundos (3000 milissegundos)
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };
  
  return (

    <motion.div
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section 
        id='login'
        className='flex flex-col justify-center items-center w-screen h-screen bg-login-bg bg-cover bg-center'
      >
        {error && 
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10" role="alert">
            <strong class="font-bold">Erro!</strong>
            <span class="block sm:inline">{error}</span>
          </div> 
        }

        <Link to="/Home" className="absolute top-8 left-10 m-8">
          <div className="min-w-[2rem] h-[2rem]">
              <AiFillHome
                className="w-full h-full rounded-full object-cover text-white hover:text-bondi-blue-500"
              />
          </div>
        </Link>
    
        <motion.div
              variants={scaleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >

        <div className='relative w-[500px] h-[540px] bg-firefly-950 rounded-lg overflow-hidden'>
          {/* Linhas Dinâmicas */}
          <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-heliotrope-500 via-heliotrope-500 to-transparent-r -top-[50%] -left-[50%]  animate-spin-delay2 origin-bottom-right"></div>
    
          <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-bondi-blue-500 via-bondi-blue-500 to-transparent-r -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"></div>
    
          <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-bondi-blue-500 via-bondi-blue-500 to-transparent-r -top-[50%] -left-[50%] animate-spin-slow animate-spin-delay2 origin-bottom-right"></div> 
    
          <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-heliotrope-500 via-heliotrope-500 to-transparent-r -top-[50%] -left-[50%] animate-spin-delay3 origin-bottom-right"></div> 
    
         
          <div className="absolute inset-1 bg-firefly-950 rounded-lg z-10 p-5 ">
            <form className='m-5' onSubmit={handleLogin}>
              <h2 className='text-4xl text-white font-medium text-center'>Bem-vindo ao Battoumanager</h2>
              <div className='flex flex-col text-white py-2 mt-7'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input  
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                />
              </div>
              <div className='flex flex-col text-white py-2 mt-2'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Senha
                </label>
                <input 
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                />
              </div>
              <div className='flex justify-between text-gray-400 py-2 mt-3'>
                <p className='flex items-center'>
                  <input className='mr-2' type="checkbox"/>Lembre-me
                </p>
                <p>Esqueci minha senha</p>
              </div>
              <div className='mt-5'>
                <button 
                  type="submit" 
                  className='w-full my-5 py-2 bg-bondi-blue-500 shadow-lg shadow-bondi-blue-500/50 hover:shadow-bondi-blue-500/40 text-white font-semibold rounded-lg'
                >
                  SIGN IN
                </button>
              </div>
            </form>
          

          </div>
          
        </div>
        </motion.div>
      </section>
    </motion.div>
  );
  
};

export default Login;