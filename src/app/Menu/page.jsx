'use client'
import "./Menu.scss"
import Image from "next/image";
import { useEffect, useState } from 'react';
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    // Fetch menu data from the API
    const fetchMenuData = async () => {
      const url = 'https://burgers-hub.p.rapidapi.com/burgers';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '39ca4960f3msh9b8943ae24b7a32p15bfa9jsnb86e8e7901d9',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMenuItems([data]); 
        console.log(data);// Update the state with the fetched menu items
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu-items">
      {menuItems.map((menuGroup, index) => (
  <div key={index} className="menu-group">
    {menuGroup.map((menuItem) => (
      <div key={menuItem.id} className="menu-item">
        <img src={menuItem.images[0]} alt={menuItem.name} />
        <h2>{menuItem.name}</h2>
        <p>{menuItem.desc}</p>
        <span>${menuItem.price}</span>
      </div>
    ))}
  </div>
))}

      </div>
    </div>
  );
};

export default Menu;
