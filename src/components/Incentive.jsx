import React from "react";

const Incentive = () => {
  const incentives = [
    {
      name: "Free shipping",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
      description:
        "Enjoy the convenience of free shipping on all orders, making your shopping experience even more rewarding.",
    },
    {
      name: "High Qualtity",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "Experience the assurance of uncompromising quality across our entire range of products, ensuring your utmost satisfaction..",
    },
    {
      name: "Exchanges",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
      description:
        "Shop with confidence knowing that we offer hassle-free exchanges, ensuring that you find the perfect fit and style for your needs.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight text-indigo-600">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-gray-500">
              Our business is founded on the principle of exceptional customer
              service. We prioritize your satisfaction above all else, ensuring
              a positive and personalized experience. Discover the difference
              our commitment to service can make in your shopping journey.
            </p>
          </div>
          <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 mt-24">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center"
              >
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="w-28 h-24 mx-auto"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                  <h3 className="text-sm font-bold text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incentive;
