import React from "react";
// import Coding from "../assets/Lovely Animations of the Month — June 2018.gif";
import Coding from "../assets/step1.png";

const list = [
  { text: "✍️ كتابة تدوينة حول..." },
  { text: "📝 تلخيص النص التالي..." },
  { text: " اكتب محتوى إعلانًا على الفيسبوك حول..." },
  { text: "📕 ساعدني في كتابة قصة قصيرة عن..." },
  { text: "💸 ما الذي يحفز العملاء على الشراء؟" },
  { text: "💡 قم بإنشاء أفكار للعناوين الرئيسية حول..." },
];

const FirstStep = ({ imagepostion, image, mobilesection }) => {
  return (
    <section className={`  `}>
      <h1 className=" text-center font-medium  lineHieght-Custom-Header text-secondary max-w-[800px] mx-auto  text-xl sm:text-4xl">
        تجربة دردشة استثنائية مع <span className=" text-black">مُتقِن</span> شات
        تمنحك تفاعلًا فريدًا مع الذكاء الاصطناعي
      </h1>
      <div
        className={` flex flex-col-reverse  ${
          imagepostion && ""
        }  z-20 relative max-w-[1100px] ${
          mobilesection ? " bg-black " : " "
        } px-4  md:px-6 lg:px-0 py-8 mx-auto  relative lg:grid  z-30 gap-2 lg:gap-2 xl:gap-0 bg-transparent lg:py-16 lg:grid-cols-12`}>
        <div
          className={` ${
            imagepostion ? " order-2 pl-2 " : "order-1 pr-2"
          }    lg:mt-0 lg:col-span-6 lg:flex`}>
          <img
            className="w-full h-full  mx-auto  rounded-[10px]  my-auto  "
            src={Coding}
            alt="mockup"
          />
        </div>
        <div
          dir="rtl"
          className={` ${
            imagepostion ? " order-1 pr-5 " : "order-2 "
          }  text-center   px-1 place-self-center place-content-start lg:col-span-6`}>
          <div className="   md:text-start">
            <h1 className="inline-flex md:items-start  items-center justify-center px-[12px] py-2 text-base font-medium text-center  bg-[#5225CE] text-white border border-gray-300 rounded-[10px]    ">
              الخطوة الاولي
            </h1>
          </div>
          <p className="  text-2xl  mt-4 lg:ml-16   ml-0   md:leading-10  lineHieght-Custom firstStep    lg:text-xl  py-4  text-start     text-black      font-medium    md:text-[30px]  ">
            <span> ابدأ محادثة مع مُتقِن </span>شات من خلال{" "}
            <span className="text-[#5225CE]">طرح سؤال</span> أو تقديم أمر شات
          </p>
          <p className="max-w-2xl mt-3 lg:mt-12   text-start  text-secondary  mb-4 text-lg font-[100] tracking-tight xl:font-light leading-none md:text-2xl xl:text-[15px] ">
            مثال لمطالبات المستخدم:
          </p>
          <div className=" flex flex-wrap gap-3">
            {list.map((item) => (
              <p
                key={item.text}
                className=" border-[1px]     lg:text-[10px] md:text-[12px] text-[8px] sm:pl-10 pl-4  text-primary inline-flex items-center justify-center  pr-2 py-2  font-medium text-start   border-[#5225CE4D] rounded-[50px]   ">
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstStep;
