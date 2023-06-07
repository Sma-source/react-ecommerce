import React, { useContext } from "react";
//import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../context/CartContext";
// import product context
import { ProductContext } from "../context/ProductContext";

// import icons
import { FaCheck, FaQuestionCircle, FaShieldAlt, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product not find
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructured product
  const {
    title,
    price,
    description,
    image,
    rating: { count, rate },
  } = product;
  // console.log(rate);

  const fullStars = Math.floor(rate); // Get the integer part of the rating
  const decimal = rate - fullStars; // Get the fractional part of the rating

  const starElements = Array.from({ length: 5 }, (_, index) => {
    const starRating = index + 1; // Rating values start from 1

    let starStyle = {}; // Default style for non-highlighted stars

    if (starRating <= fullStars) {
      starStyle = { color: "#FFC700" }; // Highlighted stars for integer ratings
    } else if (starRating === fullStars + 1 && decimal >= 0.5) {
      starStyle = { color: "#FFC700" }; // Fully highlighted star for rounded-up rating
    }

    return (
      <FaStar
        key={starRating}
        className={`h-5 w-5 flex-shrink-0 ${
          starRating <= fullStars ? "text-yellow-400" : "text-gray-300"
        }`}
        style={starStyle}
        aria-hidden="true"
      />
    );
  });

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
          </div>
          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">${price}</p>
              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">{starElements}</div>
                    <p className="sr-only">{rate} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">{count} reviews</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{description}</p>
            </div>
            <div className="mt-6 flex items-center">
              <FaCheck
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>
        {/* product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>
            <div className="mt-4">
              <a
                href="#"
                className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
              >
                <span>What size should I buy?</span>
                <FaQuestionCircle
                  className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="mt-10">
              <button
                onClick={() => addToCart(product)}
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <FaShieldAlt
                  className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">
                  Lifetime Guarantee
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
