import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'; // Importe o hook useLocation

// import data
import { cardsData } from '../../data';
import { cardsNav } from '../../data';

// import components
import Card from './Card';
import { ThemeContext } from "../redux/ThemeContext";

// Páginas sem cardsNav
const navDatasNo = ["pesquisar", "deploy", "battousai"]

const Cards = ({ toggle }) => {
  
  const [item, setItem] = useState({ name: 'all' });
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(0);

  // Importe o hook useLocation
  const location = useLocation();

  // Verifique se o caminho da rota atual não está no array "navDatasNo"
  // para exibir o item.name
  const shouldShowNav = !navDatasNo.includes(location.pathname.substring(1).toLowerCase());

  useEffect(() => {
    // Filtrar os cards com base no caminho da rota atual
    const pathName = location.pathname.substring(1).toLowerCase(); // Remova a barra inicial do caminho

    if (shouldShowNav) {
      if (item.name === 'all') {
        setCards(cardsData.filter(card => card.path === pathName));
      } else {
        setCards(cardsData.filter(card => card.path === pathName && card.category.toLowerCase() === item.name));
      }
    } else {
      // Caso o caminho da rota estiver no array "navDatasNo", não filtre os cards
      setCards(cardsData.filter(card => card.path === pathName));
    }

  }, [item, location, shouldShowNav]); // Dependência no 'item', 'location' e 'shouldShowNav'

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const isCentered = item.length < 4 && toggle; // Verifica se o comprimento do item é menor que 4 e o toggle é verdadeiro

  return (
    <div>
      {/* projects nav */}
      {shouldShowNav && (
        <nav className='mb-12 max-w-xl mx-auto'>
          <ul className='flex flex-col md:flex-row justify-evenly items-center'>
            {cardsNav.map((item, index) => {
              return (
                <li
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${isDarkMode ? 'text-bondi-blue-700' : 'text-bondi-blue-500'} ${
                    active === index ? 'active' : ''
                  } cursor-pointer capitalize m-4`}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      {/* projects */}
      <section className={`grid gap-y-12 ${toggle && isCentered ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} lg:gap-x-8 lg:gap-y-8 ${!shouldShowNav ? 'lg:justify-center lg:mt-12' : ''}`}>
        {cards.map((item) => (
          <Card item={item} key={item.id} toggle={toggle} />
        ))}
      </section>
    </div>
  );
};

export default Cards;