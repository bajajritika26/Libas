import React from "react";
import style from "./BestSellers.module.css";
import { useValue } from "../../context";
import { BestSellersData } from "../../data";
const BestSellers = () => {
  const { addToCart, isLoading } = useValue();

  return (
    <>
      <h1 className={style.h1}> Bestsellers </h1>
      <div className={style.container}>
        {BestSellersData.map((product, index) => (
          <>
            <div className={style.card} key={index}>
              <img src={product.img} alt="img" />
              <p>{product.title}</p>
              <span>₹ {product.price}</span>
              <button  disabled={isLoading} onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default BestSellers;
