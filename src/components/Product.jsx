import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const { id, title, image, category, price } = product;

  return (
    <div>
      <div className="relative">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="relative mt-4">
          <Link to={`product/${id}`}>
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-60"
          />
          <p className="relative text-lg font-semibold text-white">{price}$</p>
        </div>
      </div>
      <div className="mt-6">
        <a
          type="button"
          className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {title}</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
