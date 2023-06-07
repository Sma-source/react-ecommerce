import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Banner from "./Banner";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <>
      <Banner />
      <header
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 transition-all `}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <div>
              <img className="w-[40px]" src={Logo} alt="" />
            </div>
          </Link>
          {/* cart */}
          <div
            className="cursor-pointer flex relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsBag className="text-2xl" />
            <div
              className="bg-indigo-600 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px]
        text-white rounded-full flex justify-center items-center"
            >
              {itemAmount}{" "}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
