import React from "react";
import style from "./Product.module.css";

const Products = ({ src, price, title }) => {
  return (
    <div className={style.Product__container}>
      <img src={src} alt="" />
      <p>{price}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Products;
