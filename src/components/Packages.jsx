import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import kite from "../assets/package/kite_5030274 1.png";
import rocet from "../assets/package/rocket_11734989 1 (1).png";
import star from "../assets/package/star 1.png";
import badge from "../assets/package/badge.png";
import tag from "../assets/package/Tag.png";
import axios from 'axios';

import { Link } from "react-router-dom";

const list = [
  {
    header: "اشتراك مجاني لمدة شهر",
    price: "مجاني",
    button: "ابدأ الآن مجاناً",
    packages: [
      "10,000 كلمة كل شهر",
      "SpaceChat للتحدث مع Ai",
      "ChatGPT",
      "4 مقالات احترافية",
      "15 صورة كل شهر",
      "المدقق اللغوي الآلي ل 2500 كلمة",
      "دعم أكثر من 100 لغة مختلفة",
      "التحديثات الشهرية",
    ],
  },

  {
    blue: true,
    header: "اشتراك ربع سنوي",
    price: "240 EGP",
    button: "اشترك الان",
    packages: [
      "خصم إضافي 40%",
      "عدد كلمات غير محدود شهريا",
      "  Ai  للتحدث مع SpaceChat ",
      "ChatGPT",
      "GPT- 4",
      "Google PaLM 2",
      "عدد صور غير محدود شهريا",
      "المدقق اللغوي الآلي لعدد كلمات غير محدود شهريا",
      "دعم أكثر من 100 لغة مختلفة",
      "تصدير المحتوى لملفات",
      "التحديثات الشهرية",
    ],
  },
  {
    header: "اشتراك شهري ",
    button: "اشترك الان",
    price: "120 EGP",
    packages: [
      "عدد كلمات غير محدود شهريا",
      "SpaceChat للتحدث مع Ai",
      "  Ai  للتحدث مع SpaceChat ",
      "ChatGPT",
      "GPT- 4",
      "Google PaLM 2",
      "عدد مقالات احترافية غير محدود شهريا",
      "المدقق اللغوي الآلي لعدد كلمات غير محدود شهريا",
      "دعم أكثر من 100 لغة مختلفة",
      "تصدير المحتوى لملفات",
      "التحديثات الشهرية",
    ],
  },
];

const Packages = () => {
  
  const [isPopped, setPopped] = useState(false);
  const [currency, setCurrency] = useState({ cur: "-", arb: " اختر العملة " });
  const [openList, setOpenList] = useState(false);
  const [currentPackage, setCurrentPackage] = useState("month");
  const [currency_api, setCurrency_api] = useState()
  const getData = async () => {
    const res = await axios.get("https://ipapi.co/json/");
    setCurrency_api(res.data.currency);
  
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  const currencyList = [
    { cur: "EGP", arb: "جنية مصري " },
    { cur: "USD", arb: "الدولار الأمريكي" },
    { cur: "SAR", arb: "الريال السعودي" },
    { cur: "AED", arb: "درهم إمراتي" },
    { cur: "KWD", arb: "دينار كويتي" },
  ];
  const handlePop = () => {
    setPopped(true);
    setTimeout(() => {
      setPopped(false);
    }, 1000);
  };

  return (
    <section
      id="packages"
      className={`  bg-transparent relative`}>
      <div
        dir="rtl"
        className={`py-[0px] px-5  z-20  relative mx-auto  lg:py-[40px] lg:px-6`}>
        <div className="mx-auto max-w-4xl  text-secondary text-center mb-3 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold   ">
            الباقات
          </h2>
          <div className=" py-4 px-4 items-center border-[1px] border-[#5225CE33]  border-opacity-[40%] rounded-[12px]   sm:flex  sm:justify-between">
            <p className="  pb-2 sm:pb-0 text-primary font-medium  sm:text-[16px] ">
              خطط مصممة خصيصًا لتناسب جميع الأعمال الشخصية والتجارية
            </p>
            <div className=" font-bold  sm:flex gap-5 sm:items-center ">
              <h2>أظهر لي الأسعا ر بـ</h2>
              <div className="rounded-[6px] sm:mx-0  mx-auto flex justify-center w-[160px] relative border-[1px] border-[#5225CE33] px-1  py-1">
                <button
                  onClick={() => setOpenList((open) => !open)}
                  className=" justify-between  px-1 py-1 w-full flex gap-2 items-center text-[12px] ">
                  {currency.arb}
                  <span className=" font-sans font-bold">{currency.cur}</span>
                  <IoIosArrowDown className=" w-4 h-5 font-bold" />
                </button>
                {openList && (
                  <ul className=" z-20 flex flex-col absolute rounded-[6px] top-[30px] w-full right-0 bg-white border-[1px]">
                    {currencyList.map((curr) => {
                      return (
                        <button
                          key={curr.cur}
                          className={`${
                            curr.cur === currency
                              ? " bg-[#5225CE] text-white"
                              : ""
                          } hover:bg-[#5225CE] w-[90%] hover:text-white text-center px-4 py-1  rounded-lg  mx-auto font-bold   justify-around  flex gap-1 items-center text-[10px] `}
                          onClick={() => {
                            setCurrency(curr);

                            setOpenList(false);
                          }}>
                          {curr.arb}
                          <span className=" font-sans">{curr.cur}</span>
                        </button>
                      );
                    })}
                  </ul>
                )}

             
              </div>
            </div>
          </div>
        </div>
       
        <div
          style={{ transitionDuration: "1000ms", transitionDelay: "500ms" }}
          className=" mt-10 max-w-[1200px]      md:space-x-0  px-4  mx-auto lg:flex lg:grid-cols-4  md:grid-cols-2   md:justify-between gap-6 ">
          <div
            className={`flex relative     bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[1.8px]  border-opacity-[20%]  border-[#6E4CCD66]   bg-white      text-primary   `}>
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="  flex   gap-4 bg-[#6E4CCD66] rounded-t-[16px]   text-white text-lg  font-medium text-start p-4  py-5     items-start    w-full">
              <img
                src={kite}
                className=" max-w-[30px]"
              />
              <header>اشتراك مجاني </header>
            </div>
            <div className=" text-start my-4">
              <span
                dir="ltr"
                className="mr-2 priceText gap-1  items-baseline flex justify-center   text-[#001B79]  relative z-0    text-3xl font-bold">
                <div className="text-[18px] font-light ">شهريًا </div>
                <div className="text-[25px] ">\</div>
                <div className="font-sans text-[21px]">
                {currency.cur === "-" && currency_api ==="EGP"  ?  "EGP 0" :""}
                {currency.cur === "-" && currency_api !=="EGP"  ?  "$ 0" :""}
                  {currency.cur === "EGP"&& "EGP 0" }
                  {currency.cur === "USD" && "$ 0"}
                  {currency.cur === "AED" && "AED 0"}
                  {currency.cur === "KWD" && "KWD 0"}
                  {currency.cur === "SAR" && "SAR 0"}
                </div>
              </span>
            </div>
            <div className=" font-light text-[13px] px-5  text-[#001B79]">
              وصول إلى محتوى متنوع وجودة عالية في كافة الأقسام دون دفع أي رسوم .
            </div>
            <div className="  flex justify-center text-[#C6B4F9]  py-3 font-bold items-baseline gap-1">
              <div className=" text-center font-sans font-bold ">5000</div>
              كلمة
            </div>

            <Link
              to="http://auth.mutqinai.com/#/signup"
              className={` hover:text-white       hover:bg-[#9169ff] mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#C0ADF5]  text-white  border-[#C0ADF5] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}>
              ابدأ الآن مجاناً
            </Link>
            <ul
              role="list"
              className="    text-primary  px-8   py-5    font-light  flex flex-col gap-1   text-left">
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI</span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة العادية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>
          </div>
          <div
            className={`flex relative    bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[2px]   border-[#EB7203]   bg-white      text-primary   `}>
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="  flex   gap-4 bg-[#EB7203] rounded-t-[16px]   text-white text-lg  font-medium text-start p-4  py-5     items-start    w-full">
              <img
                src={rocet}
                className=" max-w-[30px]"
              />
              <header> باقة البداية </header>
            </div>
            <div className=" text-start my-4">
              <span
                dir="ltr"
                className="mr-2 priceText gap-1  items-baseline flex justify-center   text-[#001B79]  relative z-0    text-3xl font-bold">
                <div className="text-[18px] font-light ">شهريًا </div>
                <div className="text-[25px] ">\</div>
                <div className="font-sans text-[21px]">
                {currency.cur === "-" && currency_api ==="EGP"  ?  "EGP 299" :""}
                {currency.cur === "-" && currency_api !=="EGP"  ?  "$ 6.34" :""}
                   {currency.cur === "EGP" &&  "EGP 299" }
                  {currency.cur === "USD" && "$ 6.34"}
                  {currency.cur === "AED" && "AED 23.29"}
                  {currency.cur === "KWD" && "KWD 1.95"}
                  {currency.cur === "SAR" && "SAR 23.79"}
                </div>
              </span>
            </div>
            <div className=" font-light text-[13px] px-5  text-[#001B79]">
              استمتع بمزايا مُتقِن بشكل متقدم، للوصول لخيارات مخصصة لمختلف
              التخصصات .
            </div>
            <div className="  flex justify-center text-[#FF9C6C]  py-3 font-bold items-baseline gap-1">
              <div className=" text-center font-sans font-bold">50</div>
              ألف كلمة
            </div>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`        hover:bg-[#ff9159] mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#FFA275]  text-white  border-[#FFA275] border-[1px]   focus:ring-4 focus:ring-[#FFA275] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}>
              اشترك الان{" "}
            </Link>
            <ul
              role="list"
              className="    text-primary  px-8   py-5    font-light  flex flex-col gap-1   text-left">
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI</span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة أسرع 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>
          </div>
          <div
            className={`flex relative     bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[2px]  border-[#1FB5AC]   bg-white      text-primary   `}>
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="  flex   gap-4 bg-[#1FB5AC] rounded-t-[16px]   text-white text-lg  font-medium text-start p-4  py-5     items-start    w-full">
              <img
                src={star}
                className=" max-w-[30px]"
              />
              <header> الباقه الاساسيه </header>
            </div>
            <div className=" text-start my-4">
              <span
                dir="ltr"
                className="mr-2 priceText gap-1  items-baseline flex justify-center   text-[#001B79]  relative z-0    text-3xl font-bold">
                <div className="text-[18px] font-light ">شهريًا </div>
                <div className="text-[25px] ">\</div>
                <div className="font-sans text-[21px]">
                {currency.cur === "-" && currency_api ==="EGP"  ?  "EGP 499" :""}
                {currency.cur === "-" && currency_api !=="EGP"  ?  "$ 10.58" :""}
                  {currency.cur === "EGP" && "EGP 499"}
                  {currency.cur === "USD" && "$ 10.58"}
                  {currency.cur === "AED" && "AED 38.88"}
                  {currency.cur === "KWD" && "KWD 3.25"}
                  {currency.cur === "SAR" && "SAR 39.71"}
                </div>
              </span>
            </div>
            <div className=" font-light text-[13px] px-5  text-[#001B79]">
              تجربة متكاملة ومتقدمة بشكل أكبر ومثالية للمبدعين والشركات الناشئة
              .
            </div>
            <div className="  flex justify-center text-[#1FB5AC]  py-3 font-bold items-baseline gap-1">
              <div className=" text-center font-sans font-bold">200</div>
              ألف كلمة
            </div>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`        hover:bg-[#1FB5AC] mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#1FB5AC]  text-white  border-[#66B8E4] border-[1px]   focus:ring-4 focus:ring-[#1FB5AC] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}>
              اشترك الان{" "}
            </Link>
            <ul
              role="list"
              className="    text-primary  px-8   py-5    font-light  flex flex-col gap-1   text-left">
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI</span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة أسرع 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>
          </div>
          <div
            className={`flex  relative h-[620px]  bottom-[10px] bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[5px]    border-[#7238F0]   bg-white      text-primary   `}>
            <img
            src={tag}
            className=" absolute  z-3 lg:right-[70%] xl:right-[70%] md:right-[77.8%] md:max-w-[100px] top-[2%] right-[82%] max-w-[85px]  right-[10px]"
          />
            <div className="  flex   gap-4 bg-[#7238F0] rounded-t-[10px]   text-white text-lg  font-medium text-start p-4  py-5     items-start    w-full">
              <img
                src={badge}
                className=" max-w-[30px]"
              />
              <header> الباقه الاحترافية </header>
 
            </div>
            <div className=" text-start mt-4 ">
              <span
                dir="ltr"
                className="mr-2 priceText gap-1  items-baseline flex justify-center   text-[#E8A803]  relative z-0    text-3xl font-bold">
                <div className="text-[18px] font-light font-[900] ">ثلاثة أشهر </div>
                <div className="text-[25px] ">\</div>
                <div className="font-sans text-[21px]">
                {currency.cur === "-" && currency_api ==="EGP"  ?  "EGP 799" :""}
                {currency.cur === "-" && currency_api !=="EGP"  ?  "$ 16.95" :""}
                
                {currency.cur === "EGP" && "EGP 799"}
                {currency.cur === "USD" && "$ 16.95"}
                {currency.cur === "AED" && "AED 62.26"}
                {currency.cur === "KWD" && "KWD 5.21"}
                {currency.cur === "SAR" && "SAR 63.58"}
               
                </div>
              </span>
            </div>
            <h3 className=" text-[12.94px] text-center  font-bolder my-2 text-[#001B79]">اكتب محتوي بلا حدود لمدة ثلاثة أشهر!!  </h3>
            <div className=" font-light text-[12px] px-5  text-[#001B79]">
            عرض حصري. اشترك لمدة شهر، واحصل على شهرين إضافيين مجانًا لفترة محدودة الآن.

            </div>
            <div className="  flex justify-center text-[#7238F0]  py-3 font-bold items-baseline gap-1">
              عدد كلمات غير محدود
            </div>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`        hover:bg-[#7238F0] mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#7238F0]  text-white  border-[#7238F0] border-[1px]   focus:ring-4 focus:ring-[#7238F0] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}>
              اشترك الان{" "}
            </Link>
            <ul
              role="list"
              className="    text-primary  px-8   py-5    font-light  flex flex-col gap-1   text-left">
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI</span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة أسرع 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] ">•</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Packages;