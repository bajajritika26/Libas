import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Categories.module.css";
const Categories = () => {
  return (
    <>
      <h1 className={style.h1}>Categories</h1>

      <div className={style.collections}>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/KURTAS_new_540x.jpg?v=1692180029" alt="" /></NavLink>
            <span>Kurtas</span>
            
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/SUITS_New_540x.jpg?v=1692180088" alt="" /></NavLink>
            <span>Suits</span>

            
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/DRESSES_new_540x.jpg?v=1692180167" alt="" /></NavLink>
            <span>Dresses</span>

            
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/loungewear_new_540x.jpg?v=1692180337" alt="" /></NavLink>
            <span>Lounge Wear</span>
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/plus-size-desktop_a42f4ed3-3c72-4a39-a0d5-0eaa4eaf0f25_540x.jpg?v=1692682647" alt="" /></NavLink>
            <span>Plus Size</span>
           
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/bottoms_new_540x.jpg?v=1692180461" alt="" /></NavLink>
            <span>bottoms</span>
            

          </div>
         
      </div>
      <div className={style.second}>
        <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Vector_Smart_Object_1.png?v=1684218260" alt=""/>
        <img src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/Vector_Smart_Object.png?v=1684215327" alt=""/>
        <hr/>
        <p>Get your daily dose of style inspiration!</p>
        <img className={style.gif} src="https://instafeed.nfcube.com/assets/img/loader.gif" alt=""/>
        </div>
        
    </> 
  );
};

export default Categories;
