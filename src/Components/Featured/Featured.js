import React from "react";
import styles from "./Featured.module.css";
import premium from "../../Assets/premium.webp";
import payment from "../../Assets/payment.webp";
import shipping from "../../Assets/shipping.webp";
import { NavLink } from "react-router-dom";
const Featured = () => {
  return (
    <>
      <div className={styles.first} >
        <NavLink to="/all-products">
        <img src="https://www.libas.in/cdn/shop/files/desktop-rakhi-banner_new_1500x.jpg?v=1692431118" alt=""/>
        {/* <img src="https://www.libas.in/cdn/shop/files/desktop-banner-new-in_7340fe80-a6b9-4757-bb7b-9f41ca5ddebd_1500x.jpg?v=1691464551" alt=""/> */}
        </NavLink>
      </div>
      <div className={styles.second}>
        <img src={premium} alt="" />
        <hr />
        <img src={payment} alt="" />
        <hr />

        <img src={shipping} alt="" />
      </div>
    </>
  );
};

export default Featured;
