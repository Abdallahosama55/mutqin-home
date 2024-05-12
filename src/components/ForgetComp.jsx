import React from "react";
import { Link } from "react-router-dom";

const ForgetComp = ({ image, pragraph, title,header, button }) => {
  return (
    
    <div >
    <div
              
    className=" max-w-[190px] py-2     sm:my-0 bg-[#5225CE]   h-[39px]    text-white rounded-[50px] ">
{header}
  </div>
  <div className="  md:h-[380px] w-full w-100 pt-1 pb-16 mt-2  md:grid md:grid-cols-10 ">
      <div className=" h-[300px] flex flex-col     lg:py-2 text-start md:col-span-6">
        <div>

          <h1 className=" py-4 pb-12 md:pr-4 text-2xl font-bold">{title}</h1>
          <ul className=" list-disc   md:pr-8 ">
            {pragraph.map((item, index) => (
              <li
                key={index}
                className="  md:pb-6 text-[13px] md:text-[16px]  font-normal ">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="https://auth.mutqinai.com/signup"
          className=" text-center max-w-[175px] md:mr-2  sm:my-0 bg-[#8452EF]  hover:bg-[#7451d4] px-6  py-2 mt-12 md:mt-6  text-white rounded-[10px] ">
      جرب الآن مجاناً
        </Link>
      </div>
      <div className="   sm:mt-0 md:col-span-4">
        <img
          className=" mt-32   md:mt-0 "
          src={image}
          alt="onemobile"
        />
      </div>
      </div>
    </div>
  );
};

export default ForgetComp;