import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Nav/logo.png";
import space from "../assets/Space.svg";
import facebook from "../assets/Footer/facebook logo.png";
import instagram from "../assets/Footer/insta.png";
import twitter from "../assets/Footer/x.png";
import linkedin from "../assets/Footer/linkedin logo.png";
import tec from "../assets/Footer/tec.png";
import youtube from "../assets/Footer/youtube.png";
import mutqin from '../assets/mutqin-removebg-preview 1 (2).png'

const customlist = [
  {
    title: "الحلول:",
    features: [
      { name: "كتابة المقالات", to: "#" },
      { name: "كتابة محتوي السوشيال ميديا", to: "#" },
      { name: "تحسين محركات البحث", to: "#" },
      { name: "استراتيجيات المحتوى", to: "#" },
      { name: "التسويق عبر البريد الإلكتروني", to: "#" },
      { name: "اكتشف المزيد", to: "http://auth.mutqinai.com/#/signup" },
    ],
  },
  {
    title: "الدعم:",
    features: [
      { name: "تواصل معانا", to: "#" },
      { name: "الإبلاغ عن خطأ", to: "#" },
      { name: "الإبلاغ عن عطل", to: "#" },
      { name: "طلب ميزة جديدة", to: "#" },
      { name: "المدونة", to: "#" },
    ],
  },
];
const socialMedia = [
  { icon: linkedin, link: "https://www.linkedin.com/company/mutqinai" },
  { icon: facebook, link: "https://www.facebook.com/mutqinai" },
  { icon: youtube, link: "https://www.youtube.com/@mutqinai" },
  { icon: twitter, link: "https://twitter.com/mutqinai" },
  { icon: instagram, link: "https://www.instagram.com/mutqinai1" },
  { icon: tec, link: "https://www.tiktok.com/@mutqinai" },
];

const Footer = () => {
  return (
    <footer className="border-[#001B79] footerbg  py-4 relative z-0   px-2 divide-[#001B79] ">
  
      <div
        dir="rtl"
        className="  text-primary   ">
        <div className="space-y-8 md:grid md:grid-cols-2 pb-20  pt-10 sm:px-0 px-8  justify-items-center   md:m-6   mx-auto  lg:grid-cols-5 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className=" md:pr-20 lg:pr-0 text-[#5225CE] space-y-8">
            <div className=" flex  h-[34px] gap-3 sm:justify-start justify-center items-center">
              <img
                className=" w-30 h-12"
                src={logo}
                alt="logo"
              />
            </div>
            <p className=" text-[15px]  leading-[1.8rem] text-[#535353] font-[500]">
            مرحباً بكم في موقع مُتقِن، المنصة الرائدة في كتابة المحتوى باستخدام تقنيات الذكاء الاصطناعي. نحن نتميز بتلبية احتياجات العملاء من خلال إنتاج محتوى عالي الجودة ومتقن لمختلف النصوص، سواء كان للأفراد أو الشركات.

            </p>
            
            <div className="flex flex-col  gap-3 justify-center sm:justify-start">
              <Link
                to="https://auth.mutqinai.com/signup"
                className="inline-flex max-w-[170px]  md:items-start text-[14px]  items-center justify-center px-8 py-3 text-base font-medium text-center hover:border-tertiary text-white border-[1px] hover:border-[1px] hover:bg-white hover:text-tertiary  bg-secondary rounded-[10px]   ">
                ابدأ الآن مَجاناً
              </Link>
              <div className=" flex  justify-start gap-2">
                {socialMedia.map((social) => (
                  <Link
                    className="  h-8  w-8  transition hover:scale-[1.1]  ease-in   flex justify-center items-center rounded-full "
                    to={social.link}
                    target="_blank">
                    <img
                      className=" border-white   w-7 h-7"
                      src={social.icon}
                    />
                  </Link>
                ))}
                
              </div>
            </div>
          </div>
          <div className="md:pr-16 lg:pr-0 space-y-8 text-[#535353] text-[15px] font-[400] ">
            <h1 className=" font-bold text-[#212529] text-[18px]">المميزات:</h1>
            <ul className=" space-y-3 leading-[2.2rem]">
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  مدعوم من{" "}
                  <span className=" font-sans  font-normal">GPT-4o</span>
                </Link>
              </li>
        
          
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  التوافق عبر الأنظمة الأساسية
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  سجل دقيق
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  بحث في الوقت الفعلي
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  التفاعل الصوتي
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  ردود مخصصة
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="#">
                  متعدد اللغات
                </Link>
              </li>
              <li className="transition duration-300 ease-in  hover:scale-[1.1]">
                <Link
                  className="  transition  ease-in hover:text-secondary w-full"
                  to="http://auth.mutqinai.com/#/signup">
                  اكتشف المزيد
                </Link>
              </li>
            </ul>
          </div>
          {customlist.map((item) => (
            <div
              key={item.title}
              className="space-y-8  text-[15px]   font-[400] ">
              <h1 className=" font-bold text-[18px] text-[#212529]">
                {item.title}
              </h1>
              <ul className=" space-y-3  text-[#535353]">
                {item.features.map((link, index) => (
                  <li
                    className="transition duration-300 ease-in  hover:scale-[1.1]"
                    key={`${index}-link`}>
                    <Link
                      className=" leading-[2.2rem]  transition  ease-in hover:text-secondary w-full"
                      to={link.to}
                      key={link.name}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className=" w-full    ">
          <img src={mutqin} className= " mt-24 w-full"/>
          </div>
        </div>
      </div>
      <div className=" border mx-5  md:mx-12  border-t-[1px] border-0 border-[#1B223C]  text-[12px] text-primary justify-center items-center flex  flex-wrap gap-16  text-center  py-5">
        <p className=" hover:text-secondary cursor-default text-[#535353] font-bold font-sans">
          2024 All Rights Reserved
        </p>
  
      </div>
    </footer>
  );
};

export default Footer;
