import React from "react";
import mobile from "../assets/comingSoon.png";
import iosStore from "../assets/iosStore.png";
import appStore from "../assets/Google download button.png";
import { Link } from "react-router-dom";
import motqinWightMobile from "../assets/mobileSection/iphone-12-pro-max-white.png";
import motqinBlackMobile from "../assets/mobileSection/iphone-12-pro-max-white@2x-1.png";

const MobileSection = () => {
  return (
    <section className=" bg-transparent  relative  px-4">
      <div className=" max-w-screen-lg my-10 text-center mx-auto">
        <div className=" font-bold px-4 text-3xl md:text-4xl text-tertiary">
          تعزيز سير العمل الخاص بك مع مُتقِن{" "}
        </div>
        <div dir="rtl" className=" max-w-4xl flex mx-auto  font-normal px-4 text-sm md:text-lg mt-4  text-primary">
        
        ستكون لديك القدرة على التغلب على المنافسة وتحسين تصنيف محتواك على محركات البحث الرئيسية مثل جوجل. استفد من زيادة النقرات، وتحسين عدد المشتركين، وزيادة المبيعات. مُتقِن ليس مجرد أداة، بل هو شريك استراتيجي يساعدك في تحقيق أهدافك على الإنترنت.
        </div>
     
      </div>

    </section>
    // <div>
    // <div className=" max-w-screen-lg mt-10 text-center mx-auto">
    //   <div className=" font-bold px-4 text-3xl md:text-4xl text-tertiary">
    //     تعزيز سير العمل الخاص بك مع مُتقِن{" "}
    //   </div>
    //   <div className=" max-w-4xl mx-auto  font-normal px-4 text-sm md:text-lg mt-4  text-primary">
    //     ستكون لديك القدرة على التغلب على المنافسة وتحسين تصنيف محتواك على
    //     محركات البحث الرئيسية مثل جوجل. استفد من زيادة النقرات، وتحسين عدد
    //     المشتركين، وزيادة المبيعات. مُتقِن ليس مجرد أداة، بل هو شريك استراتيجي
    //     يساعدك في تحقيق أهدافك على الإنترنت.
    //   </div>
    // </div>
    //   <div className="max-w-screen-lg mt-10  px-4 mx-auto">
    //     <img src={mobile} />
    //   </div>
    // </div>
  );
};

export default MobileSection;
