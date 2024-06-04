import React from "react";
import Slider from "react-slick";
import salla from '../assets/contentSection/salla.png';
import ads from '../assets/contentSection/Advertising.png';
import product from '../assets/contentSection/3d-model 1.png';
import idea from '../assets/contentSection/Idea.png';
import facebook from '../assets/contentSection/Idea.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: salla },
  { title: "إقترح اسم شركة     ", img: salla },
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: salla },
  { title: "إقترح اسم شركة     ", img: salla },
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: salla },
  { title: "إقترح اسم شركة     ", img: salla },
  { title: "وصف منتج سلة", img: salla },
  { title: "وصف  إعلان", img: ads },
  { title: "خصائص منتج", img: product },
  { title: " أفكار إعلانية", img: idea },
  { title: " إعلان فيسبوك", img: facebook },
  { title: "إعلان صفحة هبوط  ", img: salla },
  { title: "إقترح اسم شركة     ", img: salla },
  
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
