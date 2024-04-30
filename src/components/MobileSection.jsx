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
        <div className=" max-w-4xl mx-auto  font-normal px-4 text-sm md:text-lg mt-4  text-primary">
          ستكون لديك القدرة على التغلب على المنافسة وتحسين تصنيف محتواك على
          محركات البحث الرئيسية مثل جوجل. استفد من زيادة النقرات، وتحسين عدد
          المشتركين، وزيادة المبيعات. مُتقِن ليس مجرد أداة، بل هو شريك استراتيجي
          يساعدك في تحقيق أهدافك على الإنترنت.
        </div>
      </div>
      {/* <img
        src={mobile}
        className=" unselectable absolute w-full z-10 right-[-180px]    top-0 h-[1200px]  rotate-[-130px]"
      /> */}
      <div
        dir="rtl"
        className="grid max-w-[1100px] z-20 border-[#5225CE33]  relative rounded-[20px]  border-[1px]   px-4 py-0 mx-auto md:gap-8 xl:gap-0 lg:py-0 md:grid-cols-12">
        <div className="text-black p-4 md:p-8  lg:py-16  md:ml-auto place-self-center  md:col-span-6">
          <h1 className=" hidden sm:flex custom-mobilesection-text   flex-wrap md:flex-col    mb-4 text-2xl font-medium tracking-tight  md:text-5xl xl:text-[12px] ">
            <p>
              تطبيق <span className="font-bold">مُتقِن</span>
            </p>
            <p>مساحتك اللانهائية من الإبداع لتحسين إنتاجية </p>
            <p>عملك!</p>
          </h1>
          <h1 className=" sm:hidden  custom-mobilesection-text  flex flex-wrap md:flex-col    mb-4 text-2xl font-medium tracking-tight  md:text-5xl xl:text-[12px] ">
            تطبيق مُتقِن مساحتك اللانهائية من الإبداع لتحسين إنتاجية عملك!
          </h1>
          <p className=" mb-6  font-extralight  text-[15px] lg:mb-8 md:text-lg lg:text-[12px] ">
            يوفر التطبيق واجهة مستخدم مميزه للوصول إلى{" "}
            <span className=" font-sans  font-normal">ChatGPT</span> و
            <span className=" font-sans  font-normal">GPT-4</span> و
            <span className=" font-sans  font-normal">Google PaLM 2</span> دون
            أي حدود للاستخدام اليومي، كل ذلك بسعر مناسب مع عضوية واحدة.
          </p>
          <div className=" flex gap-2 justify-center items-center md:justify-normal">
            <Link
              to="# "
              className=" cursor-default">
              <img
                className="  h-[35px] w-[120px]   "
                src={appStore}
              />
            </Link>
            <Link
              to="#"
              className=" cursor-default">
              <img
                className="     h-[35px] w-[120px] "
                src={iosStore}
              />
            </Link>
          </div>
        </div>
        <div
          dir="ltr"
          className="  relative  md:mt-0 md:col-span-6 md:flex">
          <div className=" mt-4 text-center  my-4 md:my-0 font-sans text-[18px] lg:text-[25px]  ml-4 text-black  font-bold">
            Coming Soon
          </div>

          <img
            className=" lg:w-[60%] lg:h-[80%] h-[60%] w-[60%] hidden md:block absolute right-[-70px] "
            src={motqinWightMobile}
            alt="motqinWightMobile"
          />
          <img
            className=" lg:w-[60%] lg:h-[80%] sm:h-[60%]  hidden md:block mx-auto sm:mx-0 sm:w-[60%] h-[300px] w-[80%]   sm:absolute left-[80px] bottom-0 "
            src={motqinBlackMobile}
            alt="motqinBlackMobile"
          />
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
