import React, { useEffect, useState } from "react";
import logo from "../assets/Nav/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { PiListFill } from "react-icons/pi";
import arrowIcon from "../assets/Nav/uil_arrow-up.png";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleLinkClick_page = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById("nav");

      if (nav && !nav.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setToggle(false);
  };


  const handleLinkClickOffer=()=>{
    setToggle(false);
    handleLinkClick_page()
  }

  const handleLinkNavigate = () => {
    navigate("https://login.mutqinai.com/");
  };

  return (
    <nav
      id="nav"
      dir="rtl"
      className="fixed top-0 left-0 w-full flex justify-center px-6 md:px-24 mt-5  pt-0 z-10">
      <div className=" shadow-lg rounded-2xl bg-white lg:w-[98%] xl:w-[98%] w-[100%] mx-auto bg-transparent relative flex items-center justify-between p-4">
        <HashLink
          to="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10" alt="Flowbite Logo" />
        </HashLink>

        <ul
          className={`${
            !toggle && "hidden"
          } lg:hidden w-full top-[60px] right-0 shadow-md font-medium h-[300px] absolute flex flex-col z-30 rounded-lg items-center text-primary bg-white`}>
          <li className="hover:bg-white-100 w-full py-2 text-center">
          <Link
            to="/home"
            onClick={handleLinkClick}
            className="w-full">
            الرئيسية
          </Link>
        </li>
          <li className="hover:bg-white-100 w-full py-2 text-center">
            <HashLink
              to="/home#packages"
              onClick={handleLinkClick}
              className="w-full">
              الباقات
            </HashLink>
          </li>
          <li className="hover:bg-white-100 w-full py-2 text-center">
            <HashLink
              to="/home#used"
              onClick={handleLinkClick}
              className="w-full">
              الاستخدامات
            </HashLink>
          </li>
          <li className="hover:bg-white-100 w-full py-2 text-center">
            <HashLink
              to="/home#features"
              onClick={handleLinkClick}
              className="w-full">
              مميزاتنا
            </HashLink>
          </li>
          <li className="hover:bg-white-100 w-full py-2 text-center">
            <Link
              className="w-full"
              to="/offerpage"
              onClick={()=>handleLinkClickOffer()}>
              عرضنا الحصري
            </Link>
          </li>
          <li className="hover:bg-white-100 w-full py-2 text-center">
            <HashLink
              className="w-full"
              to="/home#footer"
              onClick={handleLinkClick}>
              تواصل معنا
            </HashLink>
          </li>
          <li className="hover:bg-white-100 py-2 text-center">
            <Link
              to="https://auth.mutqinai.com/signin"
              className="lg:px-6 md:px-1.5 transition px-4 duration-300 ease-in border-secondary border-[1px] text-white bg-secondary hover:bg-white hover:text-secondary rounded-[10px] py-[10px]">
              تسجيل دخول
            </Link>
          </li>
        </ul>

        <div className="hidden ms-32 ps-5 w-full lg:block md:w-auto" id="navbar-default">
          <ul className="text-primary font-[500] text-[#1B223C] flex text-[16px] lg:gap-8 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0">
            
          <li className="transition duration-300 ease-in hover:scale-[1.1]">
            
          <Link
            to="/home"
            className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
            الرئيسية
          </Link>
        </li>
          <li className="transition duration-300 ease-in hover:scale-[1.1]">

              <HashLink
                to="/home#features"
                className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
                مميزاتنا
              </HashLink>
            </li>
            <li className="transition duration-300 ease-in hover:scale-[1.1]">
              <HashLink
                to="/home#used"
                className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
                الاستخدامات
              </HashLink>
            </li>
            <li className="transition duration-300 ease-in hover:scale-[1.1]">
              <HashLink
                to="/home#packages"
                className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
                الباقات
              </HashLink>
            </li>
            <li className="transition duration-300 ease-in hover:scale-[1.1]">
              <Link
                to="/offerpage"
                className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
                عرضنا الحصري
              </Link>
            </li>
            <li className="transition duration-300 ease-in hover:scale-[1.1]">
              <HashLink
                to="/home#footer"
                className="transition font-[300] text-[#1B223C] ease-in hover:text-secondary w-full">
                تواصل معنا
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="items-center flex gap-2">
          <div className="w-full lg:flex text-xs md:justify-between items-center md:w-auto">
            <Link
              to="http://auth.mutqinai.com/#/signin"
              className="hidden lg:block lg:px-6 md:px-1.5 transition duration-300 ease-in border-secondary border-[0px] text-secondary rounded-[12px] py-[8px]">
              تسجيل دخول
            </Link>
            <Link
              to="https://auth.mutqinai.com/signup"
              className="flex items-center lg:px-2 md:px-2 mx-2 px-2 border-[1px] border-transparent transition duration-300 ease-in text-white bg-secondary rounded-[12px]">
              <img src={arrowIcon} className="h-[25px] w-[25px] bg-white p-1 rounded-[50%]" />
              <span className="px-2 py-[8px]">ابدأ الآن مَجاناً</span>
            </Link>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <PiListFill style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
