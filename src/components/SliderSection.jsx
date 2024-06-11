import React from "react";
import Slider from "react-slick";
import salla from '../assets/contentSection/salla.png';
import ads from '../assets/contentSection/Advertising.png';
import product from '../assets/contentSection/3d-model 1.png';
import idea from '../assets/contentSection/Idea.png';
import facebook from '../assets/contentSection/Facebook.png';
import landing from '../assets/contentSection/landingpage.png';
import disc from '../assets/contentSection/discussion.png';
import startup from '../assets/start-up 1.png';
import headerads from '../assets/contentSection/headerads.png';
import website from '../assets/contentSection/website 1.png';
import aboutus from '../assets/contentSection/aboutus.png';
import web from '../assets/contentSection/web 1.png';
import webpage from "../assets/contentSection/application 1.png";
import faq from "../assets/contentSection/faq 1.png";
import feature from "../assets/contentSection/feature 1.png";
import call from "../assets/contentSection/call-to-action 1.png";
import logoicon from "../assets/contentSection/logo-design 1.png";
import termsicon from "../assets/contentSection/terms-and-conditions 1.png";
import rules from "../assets/contentSection/rules 1.png";
import producticon from "../assets/contentSection/product-description 1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: landing },
  { title: "  وصف العقارات  ", img: website },
  { title: "إقترح اسم شركة     ", img: disc },
  { title: "  عنوان الإعلان", img: headerads },
  { title: "أفكار شركات ناشئة", img: startup },
  { title: "    ماذا عنا   ", img: aboutus },
  { title: "   المواقع الإلكترونية  ", img: web },
  { title: "صفحات الموقع  ", img: webpage },
  { title: "إتخاذ إجراء CTA  ", img: faq },
  { title: "الأسئلة المتداولة   ", img: feature },
  { title: "قسم المميزات  ", img: call },
  { title: " شعار موقعك  ", img: logoicon },
  { title: " الأحكام والشروط  ", img: termsicon },
  { title: " كيف تعمل  ", img: rules },
  { title: "الوصف التعريفي    ", img: product },
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: landing },
  { title: "  وصف العقارات  ", img: website },
  { title: "إقترح اسم شركة     ", img: disc },
  { title: "  عنوان الإعلان", img: headerads },
  { title: "أفكار شركات ناشئة", img: startup },
  { title: "    ماذا عنا   ", img: aboutus },
  { title: "   المواقع الإلكترونية  ", img: web },
  { title: "صفحات الموقع  ", img: webpage },
  { title: "إتخاذ إجراء CTA  ", img: faq },
  { title: "الأسئلة المتداولة   ", img: feature },
  { title: "قسم المميزات  ", img: call },
  { title: " شعار موقعك  ", img: logoicon },
  { title: " الأحكام والشروط  ", img: termsicon },
  { title: " كيف تعمل  ", img: rules },
  { title: "الوصف التعريفي    ", img: producticon },


];

export default function SliderSection(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: props.speed,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    prevArrow: null,
    nextArrow: null,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600, // Mobile breakpoint
        settings: {
          slidesToShow: 2.8, // Show 2 slides on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  
  return (
    <div className=" my-4">
      <style>{`
        .slick-prev, .slick-next {
          display: none !important;
        }
      `}</style>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-1  ">
            <div className=" px-1 flex items-center py-3 justify-center md:gap-2  gap-1 border-[1px] border-[#1B223C] rounded-[10px] ">
              <span className="md:text-[9px] text-[7px]">{item.title}</span>
              <img src={item.img} className="w-[14px] h-[14px]" alt={item.title} />
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  );
}
