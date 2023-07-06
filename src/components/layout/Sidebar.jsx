import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Barra lateral */}
      <div className="bg-gray-800 text-white flex flex-col items-center">
        {/* Logo */}
        <div className="p-5">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        {/* Links da barra lateral */}
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li className="p-4 hover:bg-gray-700">Link 1</li>
            <li className="p-4 hover:bg-gray-700">Link 2</li>
            <li className="p-4 hover:bg-gray-700">Link 3</li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
        <p>Aqui está o conteúdo principal da página.</p>
      </div>
    </div>
  );
};

export default Sidebar;