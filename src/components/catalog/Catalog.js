import React, { useState } from "react";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import products from "../../products.json";
import style from "./Catalog.module.css";

const Catalog = () => {
  const [currentProducts, nextProducts] = useState(
    products.map(product => (
      <Products
        src={product.image}
        price={product.amount}
        title={product.name}
      />
    ))
  );

  const clickChanger = () => {
    nextProducts(
      products.map(product => (
        <Products
          src={product.image}
          price={product.amount}
          title={product.name}
        />
      ))
    );
  };

  const changer = e => {
    if (e.target.value === "All") {
      nextProducts(
        products.map(product => (
          <Products
            src={product.image}
            price={product.amount}
            title={product.name}
          />
        ))
      );
    } else {
      nextProducts(
        products
          .filter(
            product =>
              product.manufacture.toLowerCase() ===
                e.target.value.toLowerCase() ||
              product.name.toLowerCase() === e.target.value.toLowerCase()
          )
          .map(showProd => (
            <Products
              src={showProd.image}
              price={showProd.amount}
              title={showProd.name}
            />
          ))
      );
    }
  };

  return (
    <div className={style.catalog__container}>
      <div className={style.filters__container}>
        <Filters onClick={clickChanger} onChange={changer} />
      </div>
      <div className={style.products__container}>{currentProducts}</div>
    </div>
  );
};

export default Catalog;
