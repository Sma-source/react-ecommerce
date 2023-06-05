import React, { useContext } from "react";

//import product context
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // filter products to get only clothing category
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filterProducts);

  return (
    <>
      <Hero />
      <section className="mx-auto">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filterProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
