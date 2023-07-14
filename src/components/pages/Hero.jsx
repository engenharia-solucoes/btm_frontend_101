import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleWorkWithMe = (e) => {
    e.preventDefault();
    navigate('/Dashboard/Login');
  };

  return (
    <section
      id='home'
      className='lg:h-[85vh] w-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-violet-500 text-md mb-[22px]'>
              Hey, I'm Samara! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Então, que tal conhecer um pouco sobre mim e o meu trabalho...
            </p>
            <button
              type="submit"
              className='btn btn-md md:btn-lg transition ease-in-out delay-150 bg-violet-900 hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-300 text-white'
              onClick={handleWorkWithMe}
            >
              Work with me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;