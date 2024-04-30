import React from "react";
// import robot from "../assets/OBJECT HEADS.gif";
import robot from "../assets/step3.png";

const thirdList = [
  "توليد أفكار جديدة والحصول على أفكار إضافية",
  "قم بتحديث المحتوى الخاص بك قبل النشر",
  "قم بتوسيع نطاق المحتوى مع الحفاظ على الجودة العالية",
];

const ThirdStep = ({ imagepostion, image, mobilesection }) => {
  return (
    <section className={`  `}>
      <div
        className={`lg:grid flex flex-col-reverse   ${
          imagepostion && ""
        }  relative z-20  max-w-[1100px] ${
          mobilesection ? " bg-primary " : " bg-transparent"
        } px-4 md:px-6 lg:px-0  py-8 mx-auto gap-2 lg:gap-2 xl:gap-0 lg:py-10 lg:grid-cols-12`}>
        <div
          className={`  ${
            imagepostion ? " order-2 pl-2 " : "order-1 pr-2"
          }    lg:mt-0 lg:col-span-6 lg:flex`}>
          <img
            className="w-full   mx-auto  rounded-[10px]  my-auto  "
            src={robot}
            alt="mockup"
          />
        </div>
        <div
          dir="rtl"
          className={` ${
            imagepostion ? " order-1 pr-5 " : "order-2 "
          }  text-center flex flex-col  justify-between sm:justify-normal sm:gap-28  h-full place-self-center place-content-start lg:col-span-6`}>
          <div>
            <div className=" mb-2  md:text-start">
              <h1 className="inline-flex md:items-start  items-center justify-center px-[12px] py-2 text-base font-medium text-center   bg-tertiary text-white border border-gray-300 rounded-[10px]   ">
                الخطوة الثالثة
              </h1>
            </div>
            <p className="max-w-2xl mb-2 text-primary  md:block text-2xl leading-[45px] lineHieght-Custom1   lg:text-4xl   md:text-start  text-start       font-medium   md:text-[30px] lg:text-[31px] ">
              قم بنقل محادثتك{" "}
              <span className=" text-secondary">
                مع مُتقِن شات إلى مستند لإكمال
              </span>{" "}
              عملك باحترافيه
            </p>
          </div>
          <div>
            <p className="max-w-2xl mt-auto text-start font-[100]  text-secondary  mb-4 text-lg  tracking-tight xl:font-light leading-none md:text-2xl xl:text-[15px] ">
              مثال لمطالبات المستخدم:
            </p>
            <div className=" flex flex-wrap gap-5">
              {thirdList.map((item) => (
                <p
                  key={item}
                  className="border-[1px] lg:text-[10px]  md:text-[12px] text-[8px] x text-primary inline-flex items-center justify-center pl-4 pr-2 py-2  font-medium text-start   border-gray-300 rounded-[50px]   ">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdStep;
