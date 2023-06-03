import React, { useContext } from "react";

//import product context
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";

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
      <section className="py-16">
        <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
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
