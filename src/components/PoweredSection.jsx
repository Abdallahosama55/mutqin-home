import React from "react";
import google from "../assets/Google logo.png";
import coher from "../assets/powerSection/Screenshot_2024-03-31_173753-removebg-preview 1.png";
import openAi from "../assets/Vector.svg";
import Slider from "react-slick";
import gemini from "../assets/powerSection/Google Ai Gemini-01 1.png";
import palm from "../assets/powerSection/palm.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const horizontalList = [
  { title: "SEO TooLs" },
  { title: "AI Images" },
  { title: "AI Code" },
  { title: "AI voiceover" },
  { title: "open AI" },
  { title: "Speech To text" },
  { title: "SEO TooLs" },
  { title: "AI Images" },
  { title: "AI Code" },
  { title: "AI voiceover" },
  { title: "open AI" },
  { title: "Speech To text" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 8.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
  ],
};

const PoweredSection = () => {
  return (
    <section className="py-0 ">
      <div className=" mt-[70px]   text-center relative">
        <h1 className=" font-sans    font-extrabold  text-secondary  text-[27px] sm:text-[27px]  mb-[19.2px]  capitalize">
          powered by
        </h1>
        <div className=" mx-auto  px-2 mb-[30px] gap-4   sm:justify-center sm:gap-6  sm:flex-row grid grid-cols-2  sm:flex   max-w-[350px]  sm:max-w-5xl    items-center  ">
          <div className=" bg-secondary flex gap-2  w-[150px]   justify-center items-center  px-6 py-[6px]  rounded-[10px]">
            <img
              className=" w-[20px] h-[20px] sm:w-[18px] sm:h-[18px] "
              src={openAi}
            />
            <p className=" font-sans text-[#FFFFFF]  font-medium text-[20px] text-center   capitalize ">
              open ai
            </p>
          </div>
          <div className=" w-[150px]   flex justify-center py-3 px-[12px] sm:py-3 items-center  bg-secondary  rounded-[10px]">
            <img
              src={google}
              className=" max-w-[90%]"
            />
          </div>
          {/* <div className=" w-[150px]   flex justify-center sm:text-3xl items-center  px-4 py-1 sm:py-0.5 bg-secondary  rounded-[10px]">
            <p className=" text-[#FFFFFF]   font-sans  font-medium text-[20px] sm:text-[18px] text-center ">
              stabilty<span className=" text-red-600">.</span>ai
            </p>
          </div> */}
          <div className=" w-[150px]   flex justify-center py-1 px-6 sm:py-[6px] items-center  bg-secondary  rounded-[10px]">
            <img
              src={coher}
              className=" max-w-[100%] py-[6px] p-[2px]"
            />
          </div>
          <div className=" w-[150px]   flex justify-center py-1 px-6 sm:py-[6px] items-center  bg-secondary  rounded-[10px]">
            <img
              src={gemini}
              className=" max-w-[75%] py-[4px] sm:py-[3.5px] p-[2px]"
            />
          </div>

          {/* <div className=" bg-secondary flex gap-2  w-[150px]   justify-center items-center  px-6 py-[10px]   rounded-[10px]">
            <img
              className=" w-[20px] h-[20x] sm:w-[25px] sm:h-[25px] "
              src={palm}
            />
            <p className=" font-sans text-[#FFFFFF] font-medium  text-[10px] text-center   capitalize ">
              Google PaLM 2
            </p>
          </div> */}
        </div>
      </div>
      <div className=" mt-16">
        <Slider {...settings}>
          {horizontalList.map((power, index) => (
            <div
              className=" pb-2"
              key={index}>
              <button
                key={index}
                className=" font-sans  capitalize w-[160px]  py-2 font-[400]    text-[#5225CE]   text-[18px] border-[#5225CE] border-[1px]  rounded-[10px]">
                {power.title}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PoweredSection;
