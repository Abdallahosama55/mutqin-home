import React from "react";
// import orbits from "../assets/TA-DA Analysis.gif";
import orbits from "../assets/step2.png";

const list = [
  { text: "😀 أعد صياغة هذه الرسالة لتكون أكثر احترافية" },
  { text: "🪗 اختصر هذه الفقرة إلى جملة واحدة" },
  { text: "🤔 متقن شات، ما رأيك في..." },
  { text: "📝 أعد كتابة هذا البريد الإلكتروني ليكون أكثر وضوحا." },
  { text: "🎨 اقترح تحسينات لتصميم هذا الشعار لشركتي." },
  { text: "📑 قدم نصائح لإعداد تقرير فعّال وموجز." },
];

const SecondStep = ({ imagepostion, image, mobilesection }) => {
  return (
    <section className={`  `}>
      <div
        className={`lg:grid flex flex-col-reverse  ${
          imagepostion && ""
        }   max-w-[1100px] ${
          mobilesection ? " bg-primary " : " bg-transparent"
        } px-4 md:px-6 lg:px-0 py-8 mx-auto z-20  relative lg:gap-2 gap-4 xl:gap-4 lg:py-10 lg:grid-cols-12`}>
        <div className={`     lg:order-2  lg:mt-0 lg:col-span-6 lg:flex`}>
          <img
            className="  w-full  mx-auto  rounded-[10px]  my-auto"
            src={orbits}
            alt="mockup"
          />
        </div>
        <div
          dir="rtl"
          className={`   h-full flex flex-col justify-between  text-center   order-1  place-self-center place-content-start lg:col-span-6`}>
          <div>
            <div className=" mb-2  md:text-start">
              <h1 className="inline-flex md:items-start  items-center justify-center px-[12px] py-2 text-base font-medium text-center bg-tertiary  text-white border border-gray-300 rounded-[10px]   ">
                الخطوة الثانية
              </h1>
            </div>
            <p className="md:max-w-2xl mb-2  text-2xl leading-[30px] lineHieght-Custom    lg:text-4xl   text-start     text-tertiary      font-medium    md:text-4xl lg:text-[34px] ">
              <span className=" text-primary ">واصل حوارك بتوضيح </span>{" "}
              المعلومات <br className=" sm:block hidden" />و تحسين طلبك
            </p>
          </div>
          <div className=" ">
            <p className="max-w-2xl mt-3 text-start font-[100]   text-tertiary   mb-4 text-lg tracking-tight xl:font-light leading-none md:text-2xl xl:text-[15px] ">
              مثال لمطالبات المستخدم:
            </p>
            <div className=" flex flex-wrap md:gap-5 gap-2">
              {list.map((item) => (
                <p
                  key={item.text}
                  className=" border-[1px] border-[#5225CE4D] lg:text-[10px] md:text-[12px] text-[8px] text-primary inline-flex items-center justify-center px-2 py-2  font-medium text-start   border-gray-300 rounded-[50px]   ">
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondStep;
