import React, { useEffect, useState } from "react";
import logo from "../assets/Nav/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { PiListFill } from "react-icons/pi";
import arrowIcon from "../assets/Nav/uil_arrow-up.png"
import { FaArrowRight } from "react-icons/fa"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

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
  const handleLinkNavigate = () => {
    navigate("https://login.mutqinai.com/");
  };

  return (
    <nav
      id="nav"
      dir="rtl"
      className="  flex justify-center rounded-2xl  shadow-lg bg-white  pt-0 top-[-5px]     w-full            z-19    mx-auto  ">
      <div className="lg:w-[98%] xl:w-[98%] w-[100%]      mx-auto   z-19    bg-transparent        relative     flex  items-center justify-between p-4">
        {/* <div className=" max-w-screen-xl   md:mx-2  z-50 nav-shadow   bg-transparent        relative     md:rounded-[10px] flex  items-center justify-between xl:mx-auto p-4"> */}
        <a
          href="#banner"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-10  "
            alt="Flowbite Logo"
          />
        </a>

        <ul
          className={`${
            !toggle && " hidden"
          } lg:hidden  w-full top-[60px]  right-0 shadow-md font-medium h-[260px] absolute flex flex-col  z-30  rounded-lg  items-center text-primary     bg-white`}>
          {/* <li className=" hover:bg-white-100  w-full py-2  text-center">
            <Link
              to="http://auth.mutqinai.com/#/signup"
              className="">
              ابدأ الآن مَجاناً{" "}
            </Link>
          </li> */}
      

          <li className=" hover:bg-white-100 w-full py-2  text-center">
            <a
              href="#packages"
              onClick={handleLinkClick}
              className="   w-full ">
              الباقات
            </a>
          </li>
          <li className=" hover:bg-white-100 w-full py-2  text-center">
            <a
              href="#used"
              onClick={handleLinkClick}
              className=" w-full ">
              الاستخدامات
            </a>
          </li>
          <li className=" hover:bg-white-100 w-full py-2  text-center">
            <a
              href="#features"
              onClick={handleLinkClick}
              className=" w-full ">
              مميزاتنا
            </a>
          </li>
          <li className=" hover:bg-white-100 w-full py-2  text-center">
            <a
              className=" w-full "
              href="#footer"
              onClick={handleLinkClick}>
              تواصل معنا
            </a>
          </li>
          <li className=" hover:bg-white-100   py-2  text-center">
            <Link
              to="https://auth.mutqinai.com/signin"
              className=" lg:px-6 md:px-1.5 transition px-4  duration-300 ease-in  border-secondary border-[1px] text-white bg-secondary  hover:bg-white hover:text-secondary  rounded-[10px]  py-[10px]">
              تسجيل دخول
            </Link>
          </li>
        </ul>
        {/* lg device */}
        <div
          className="hidden  ms-32 ps-5  w-full lg:block md:w-auto"
          id="navbar-default">
          <ul className=" text-primary    font-[500] text-[#1B223C] flex text-[16px]  lg:gap-8  position-fixed flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0  ">
    
            <li className="transition duration-300 ease-in  hover:scale-[1.1]">
              <a
                href="#features"
                className=" transition font-[500] text-[#1B223C]  ease-in hover:text-secondary w-full">
                مميزاتنا
              </a>
            </li>
            <li className="transition duration-300 ease-in  hover:scale-[1.1]">
              <a
                href="#used"
                className=" transition  font-[500] text-[#1B223C] ease-in hover:text-secondary w-full">
                الاستخدامات
              </a>
            </li>
            <li className="transition duration-300  ease-in  hover:scale-[1.1]">
              <a
                href="#packages"
                className=" transition  font-[500] text-[#1B223C] ease-in hover:text-secondary w-full">
                الباقات
              </a>
            </li>
            <li className="transition duration-300  ease-in   hover:scale-[1.1]">
              <a
                href="#footer"
                className=" transition  font-[500] text-[#1B223C]  ease-in hover:text-secondary w-full">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        <div className=" items-center flex gap-2  ">
          <div className="   w-full lg:flex text-xs  md:justify-between items-center md:w-auto">
            <Link
              to="http://auth.mutqinai.com/#/signin"
              className=" hidden lg:block lg:px-6 md:px-1.5 transition duration-300 ease-in  border-secondary border-[0px] text-secondary  rounded-[12px]  py-[8px]">
              تسجيل دخول
            </Link>
            <Link
              to="https://auth.mutqinai.com/signup"
              className=" flex items-center lg:px-2  md:px-2 mx-2  px-2   border-[1px] border-transparent  transition duration-300 ease-in text-white    bg-secondary rounded-[12px]  " dir="rtl">
           <img src={arrowIcon} className=" h-[25px] w-[25px] bg-white p-1 rounded-[50%]"/>
           <span className=" px-2 py-[8px]">   ابدأ الآن مَجاناً</span>
              
              </Link>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <PiListFill style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;