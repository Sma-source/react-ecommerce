import React from "react";
import woman from "../assets/woman2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
    //   <div className="container mx-auto flex justify-around h-full">
    //     {/* text */}
    //     <div className="flex flex-col justify-center">
    //       {/* pretitle */}
    //       <div className="font-semibold flex items-center uppercase">
    //         <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
    //       </div>
    //       <h1 className="text-[70px] leading-[1.1] font-light mb-4">
    //         Autumn sale stylish <br />{" "}
    //         <span className="font-semibold">WOMENS</span>
    //       </h1>
    //       <Link
    //         className="self-start uppercase font-semibold border-b-2 border-black"
    //         to={"/"}
    //       >
    //         Discover More
    //       </Link>
    //     </div>
    //     {/* image */}
    //     <div className="hidden lg:block">
    //       <img src={woman} alt="shop" />
    //     </div>
    //   </div>
    // </section>

    <div className="flex flex-col border-b border-t border-gray-200 lg:border-0 py-24">
      <nav aria-label="Offers" className="order-last lg:order-first">
        <div className="max-w-7xl mx-auto lg:px-8">
          <ul
            role="list"
            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
          >
            <li className="flex flex-col">
              <a
                href={"/"}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">Download the app</p>
                <p className="font-semibold text-gray-900">
                  Get an exclusive $5 off code
                </p>
              </a>
            </li>
            <li className="flex flex-col">
              <a
                href={"/"}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">Download the app</p>
                <p className="font-semibold text-gray-900">
                  Get an exclusive $5 off code
                </p>
              </a>
            </li>
            <li className="flex flex-col">
              <a
                href={"/"}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">Download the app</p>
                <p className="font-semibold text-gray-900">
                  Get an exclusive $5 off code
                </p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="relative">
        <div
          aria-hidden="true"
          className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
        />
        <div className="relative bg-gray-100 lg:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
            <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
              <div className="lg:pr-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  Focus on what matters
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  All the charts, datepickers, and notifications in the world
                  can't beat checking off some items on a paper card.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Productivity
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            src="src/assets/fashion.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
