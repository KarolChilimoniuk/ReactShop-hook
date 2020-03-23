import React from "react";
import style from "./Product.module.css";

const Products = ({ src, price, title }) => {
  return (
    <div className={style.product__container}>
      <img className={style.product__image} src={src} alt="" />
      <p>{price}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Products;
