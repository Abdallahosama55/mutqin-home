import React from "react";
import Slider from "react-slick";
import salla from '../assets/contentSection/salla.png';
import ads from '../assets/contentSection/Advertising.png';
import product from '../assets/contentSection/3d-model 1.png';
import idea from '../assets/contentSection/Idea.png';
import facebook from '../assets/contentSection/Idea.png';

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

export default function SliderSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800, // Adjust autoplay speed (in milliseconds)
        prevArrow: null,
        nextArrow: null,
        cssEase: "linear",
        
      };
  return (
    <div className=" py-2">
      <style>{`
        .slick-prev, .slick-next {
          display: none !important;
        }
      `}</style>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-1 ">
            <div className="flex items-center py-2 justify-center gap-2 border-[1px] border-[#1B223C] rounded-[12px] p-2">
              <span className="md:text-[9px] text-[6px]">{item.title}</span>
              <img src={item.img} className="w-[14px] h-[14px]" alt={item.title} />
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  );
}
