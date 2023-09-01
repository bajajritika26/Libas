import React from "react";
import style from "./AllData.module.css";
import { data } from "../../data";
import { useValue } from "../../context";
import { useRef, useState } from "react";

const AllData = () => {
  const { isLoading, addToCart } = useValue();
//   const [priceRange, setPriceRange] = useState(10000);
// eslint-disable-next-line
  const [categories, setCategories] = useState({  
    cottonSet: false,
    silkSet: false,
    kurta: false,
    coords: false,
  });
  const [show, setShow] = useState(false);
  const searchRef = useRef();
  const [Data, setData] = useState(data);
  function handleSearch(event) {
    const searchString = event.target.value.toLowerCase();
    const newArray = data.filter((item) =>
      item.title.toLowerCase().includes(searchString)
    );
    setData(newArray);
  }
  const changeShow = () => {
    setShow(!show);
  }
  return (
    <>
      <h1 className={style.h1}>All Products</h1>
      <div className={style.first}>
        <input
          onChange={handleSearch}
          className={style.searchBar}
          type="text"
          placeholder="Search"
          ref={searchRef}
        />
        
        <div>
          <h3 className={style.h3} onClick={changeShow}>Category</h3>

          {show && (
            <div className={style.categoryContainer}>
              <div className={style.inputContainer}>
                <input
                  type="checkbox"
                  id="cottonSets"
                  name="cottonSets"
                  onChange={(e) =>
                    setCategories((prevCategories) => ({
                      ...prevCategories,
                      cottonSets: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="cottonSets">Cotton Suits</label>
              </div>
              <div className={style.inputContainer}>
                <input
                  type="checkbox"
                  id="silkSet"
                  name="silkSet"
                  onChange={(e) =>
                    setCategories((prevCategories) => ({
                      ...prevCategories,
                      silkSet: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="silkSet">Silk Suits</label>
              </div>
              <div className={style.inputContainer}>
                <input
                  type="checkbox"
                  id="coords"
                  name="coords"
                  onChange={(e) =>
                    setCategories((prevCategories) => ({
                      ...prevCategories,
                      coords: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="coords">Co-ords</label>
              </div>
              <div className={style.inputContainer}>
                <input
                  type="checkbox"
                  id="kurta"
                  name="kurta"
                  onChange={(e) =>
                    setCategories((prevCategories) => ({
                      ...prevCategories,
                      kurta: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="kurta">Kurta</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.container}>
        {Data.map((product, index) => (
          <>
            <div className={style.card} key={index}>
              <img src={product.img} alt="" />
              <p>{product.title}</p>
              <span>₹ {product.price}</span>
              <button disabled={isLoading} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AllData;

/* <h2>Filter</h2>
          <form>
            <label htmlFor="price">Price: {priceRange}</label> <br />
            <input
              type="range"
              id="price"
              name="price"
              min="1"
              max="100000"
              className={Style.priceRange}
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              step="10"
            /> */