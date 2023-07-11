import React from 'react';
import { Link } from 'react-router-dom';
import { navdatas } from '../../Data';

const SidebarData = ({toggle}) =>  {
  return (
    <nav className="flex-grow">
      <ul className="space-y-2">
        {navdatas.map((data) => (
          <li key={data.id} className={`${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } sidebar mt-5 last:absolute left-4 bottom-4`}>
            <Link to={data.id === 1 ? '/' : `/${data.text.toLowerCase()}`}>
              <div className="justify-content flex">
                <div className="mr-5 text-[1.7rem] text-brown">{data.icon}</div>
                <div
                  className={`${
                    toggle ? "opacity-0 delay-200" : ""
                  } text-[1rem] text-brown whitespace-pre`}
                >
                  {data.text}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarData;