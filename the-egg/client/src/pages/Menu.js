import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_FOOD } from '../utils/queries';
import Omelette from '../Components/Menu/Omelette';
import FlatTop from '../Components/Menu/FlatTop';
import Eggs from '../Components/Menu/Eggs';
import Eggceptional from '../Components/Menu/Eggceptional';
import Benedict from '../Components/Menu/Benedict';
import HouseSpecial from '../Components/Menu/HouseSpecial';
import Burgers from "../Components/LunchMenu/Burgers.js"
import Melts from "../Components/LunchMenu/Melts.js"
import Salads from "../Components/LunchMenu/Salads.js"
import Sandwiches from "../Components/LunchMenu/Sandwiches.js"

function Menu() {
  const { loading, data } = useQuery(QUERY_FOOD);
  const [menuType, setMenuType] = useState('breakfast'); // default to breakfast menu

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleMenuType = (type) => {
    setMenuType(type);
  };

  const breakfastMenu = (
    <div className="menu">
      <div className="menu-row">
        <Omelette />
        <Eggs/>
        <Eggceptional />
      </div>
      <div className="menu-row">
        <FlatTop />
        <HouseSpecial />
        <Benedict />
      </div>
      <div className="cont-space"></div>
    </div>
  );

  const lunchMenu = (
    <div className="menu">
      <div className="menu-row">
        <Burgers/>
        <Melts/>
      </div>
      <div className="menu-row">
        <Sandwiches/>
        <Salads/>
      </div>
      <div className="cont-space"></div>
    </div>
  );

  return (
    <div>
      <div className="menu-buttons">
        <button className={menuType === 'breakfast' ? 'active' : ''} onClick={() => toggleMenuType('breakfast')}>
          Breakfast Menu
        </button>
        <button className={menuType === 'lunch' ? 'active' : ''} onClick={() => toggleMenuType('lunch')}>
          Lunch Menu
        </button>
      </div>
      {menuType === 'breakfast' ? breakfastMenu : lunchMenu}
    </div>
  );
}

export default Menu;