import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Collections.module.css";
const Collections = () => {
  return (
    <>
      <h1 className={style.h1}>Collections</h1>

      <div className={style.collections}>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/3_79aa5982-39bd-4a7b-a8c0-66ecc184f52f_540x.jpg?v=1692621202" alt="" /></NavLink>
            <span>Shades Of Sea</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p></NavLink>
            
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/2_590f871e-5b52-429a-8fcd-4add18699010_540x.jpg?v=1692621153" alt="" /></NavLink>
            <span>Autumn Rose</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p>

            </NavLink>
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/1_0b260e37-85c2-459b-bbe6-0165dd22e760_540x.jpg?v=1692620383" alt="" /></NavLink>
            <span>Rooh</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p>

            </NavLink>
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/4_57767e68-b40b-4157-8996-335bd3bab1a1_540x.jpg?v=1692621243" alt="" /></NavLink>
            <span>Fresh Cottons</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p>

            </NavLink>
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/5_98a69f7d-24b5-4883-b02e-6c314f7ccb93_540x.jpg?v=1692621342" alt="" /></NavLink>
            <span>Stunning Sarees</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p>

            </NavLink>
          </div>
          <div>
            <NavLink to="/cottonSets">
            <img src="https://www.libas.in/cdn/shop/files/6_2e2f5371-4233-4a38-acd8-cf79ffe35442_540x.jpg?v=1692621412" alt="" /></NavLink>
            <span>Back-To-Work</span>
            <NavLink to={"/cottonSets"}><p>SHOP NOW</p>

            </NavLink>
          </div>
        
      </div>
    </>
  );
};

export default Collections;
