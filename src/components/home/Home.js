import React from "react";
import H1 from "../h1/H1";
import H2 from "../h2/H2";
import Products from "../products/Products";
import products from "../../products.json";
console.log(products);

const featuredDesktops = products.filter(
  product => product.featured === true && product.category === "desktop"
);

const featuredTablets = products.filter(
  product => product.featured === true && product.category === "tablet"
);

const Home = () => {
  return (
    <div>
      <H1 name="Welcome to our Page" />
      <div>
        <H2 name="Desktops" />
        {featuredDesktops.map(product => (
          <Products
            src={product.image}
            price={product.amount}
            title={product.name}
          />
        ))}
      </div>
      <div>
        <H2 name="Tablets" />
        {featuredTablets.map(product => (
          <Products
            src={product.image}
            price={product.amount}
            title={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
