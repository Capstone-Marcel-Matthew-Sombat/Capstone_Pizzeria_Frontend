import React from "react";
import { menuData } from "./database/menudata.js";
import './styles/MenuStyles.css'

const MenuList = () => {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      {menuData.map((category, index) => (
        <div key={index} className="menu-category">
          <h2>{category.category}</h2>
          <div className="menu-items">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-item">
                <h3>{item.name}</h3>
                <p className="item-price">{item.price}</p>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
