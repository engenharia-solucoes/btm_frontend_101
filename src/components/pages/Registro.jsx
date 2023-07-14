import React from 'react';

const Registro = () => {

  return (
    <section
      id='registro'
      className='lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-violet-500 text-md mb-[22px]'>
              Outra página
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Registro
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registro;