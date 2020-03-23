import React, { useState } from "react";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import products from "../../products.json";

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
    <div>
      <div>
        <Filters onClick={clickChanger} onChange={changer} />
      </div>
      <div>{currentProducts}</div>
    </div>
  );
};

export default Catalog;
