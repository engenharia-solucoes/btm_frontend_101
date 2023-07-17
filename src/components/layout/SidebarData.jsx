import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navdatas } from '../../Data';

const SidebarData = ({ toggle }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex-grow">
      <ul className="space-y-2">
        {navdatas.map((routes, i) => {

          const routePath = `/${routes.name}`;

          return (
            <li
              key={routes.id}
              className={`${
                toggle ? 'last:w-[3.6rem]' : 'last:w-[15rem]'
              } sidebar mt-5 last:absolute bottom-4`}
            >
              <Link
                to={routePath}
                className={`${
                  activeIndex === i ? 'text-white' : ''
                }`}
                onClick={() => handleItemClick(i)}
              >
                <div className="justify-content flex">
                  <div 
                    className="mr-5 text-[1.7rem]"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)} 
                  >
                    {routes.icon}
                  </div>
                  <div
                    style={{
                      transitionDelay: `${toggle ? '0ms' : `${i + 3}00ms`}`,
                    }}
                    className={`whitespace-pre ${
                      toggle ? 'invisible translate-x-28' : 'duration-500'
                    }`}
                  >
                    {routes.name}
                  </div>
                </div>
              </Link>

              <div
                style={{
                  transitionDelay: toggle && hoveredIndex === i ? '0ms' : `${i + 3}00ms`,
                }}
                className={`whitespace-pre ${
                  toggle && hoveredIndex === i
                    ? 'last:ml-[3.2rem] absolute opacity-500 bg-indigo-300 text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-2 py-1 ml-6 group-hover:duration-300 -translate-x-3 transition-all'
                    : 'absolute hidden bg-indigo-300 text-white text-sm left-full rounded-md drop-shadow-lg mt-1 px-2 py-1 ml-6 duration-500 translate-x-28'
                }`}
              >
                {routes.name}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarData;