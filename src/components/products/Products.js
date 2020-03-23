import React from "react";

const Products = ({ src, price, title }) => {
  return (
    <div>
      <img src={src} alt="" />
      <p>{price}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Products;
