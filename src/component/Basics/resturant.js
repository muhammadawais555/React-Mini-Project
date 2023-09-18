import React , { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import Menucard from './Menucard';
import Navbar from './navbar';


const uniquelist = [
  ...new Set
  (Menu.map((curElem) => {
  return curElem.category;
})
), "All",
];
 console.log(uniquelist);
const Resturant = () => {
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(uniquelist);

  const filterItem = (category) => {

    if(category==="All")
    {
      setMenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedlist);
  }

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <Menucard menuData={menuData} /> 
   </>)
}

export default Resturant;
