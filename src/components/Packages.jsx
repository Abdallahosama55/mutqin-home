import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import kite from "../assets/package/kite_5030274 1.png";
import rocet from "../assets/package/rockets.png";
import star from "../assets/package/bullseye-arrow.png";
import badge from "../assets/package/badge.png";
import tag from "../assets/package/demond.png";
import queen from  "../assets/package/crown.png";
import axios from "axios";
import elibse from '../assets/package/Ellipse 11.png'
import { Link } from "react-router-dom";



const Packages = () => {
  const [isPopped, setPopped] = useState(false);
  const [currency, setCurrency] = useState({ cur: "-", arb: " اختر العملة " });
  const [openList, setOpenList] = useState(false);
  const [currentPackage, setCurrentPackage] = useState("month");
  const [currency_api, setCurrency_api] = useState();
  const [buttonStates, setButtonStates] = useState({
    button1: true,
    button2: true,
    button3: true,
  });

  const handleClickCoupon = (btnId, btnState) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [btnId]: btnState,
    }));
  };
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
    <section id="packages" >
      <div
        dir="rtl"
        className={`py-[0px] px-0  z-20  relative mx-auto  pt-4 pb-0  pt-4  mx-auto max-w-screen-xl  max-w-[1100px]   lg:py-[40px] `}
      >
        <div className="mx-auto max-w-4xl  text-secondary text-center mb-3 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold   ">
            الباقات
          </h2>
          <div className=" py-4 px-4 mx-6 md:mx-auto items-center border-[1px] border-[#5225CE33]  border-opacity-[40%] rounded-[12px]   sm:flex  sm:justify-between">
            <p className="  pb-2 sm:pb-0 text-primary font-medium  sm:text-[16px] ">
              خطط مصممة خصيصًا لتناسب جميع الأعمال الشخصية والتجارية
            </p>
            <div className=" font-bold  sm:flex gap-5 sm:items-center ">
              <h2>أظهر لي الأسعا ر بـ</h2>
              <div className="rounded-[6px] sm:mx-0  mx-auto flex justify-center w-[160px] relative border-[1px] border-[#5225CE33] px-1  py-1">
                <button
                  onClick={() => setOpenList((open) => !open)}
                  className=" justify-between  px-1 py-1 w-full flex gap-2 items-center text-[12px] "
                >
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
                          }}
                        >
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
          className=" mt-10   xl:px-24 lg:px-24 px-6   grid lg:grid-cols-4  md:grid-cols-2   md:justify-between gap-5 "
        >
          <div
            className={`flex relative     bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[1.8px]  border-opacity-[20%]  border-[#E7EBFF]  shadow-md  bg-white      text-primary   `}
          >
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="   pt-7   gap-5  rounded-t-[16px]    text-lg  font-medium text-start px-5 py-4 pb-0    items-start    w-full">
              <img
                src={kite}
                className=" max-w-[50px] bg-[#692BEF] mb-5 p-2 rounded-xl"
              />
              <header>اشتراك مجاني </header>
              <div className=" font-light text-[13px]    text-[#797878]">
              وصول إلى محتوى متنوع مجاناً.
              </div>
              <div className="  flex  text-[#692BEF]  py-1 font-bold items-baseline gap-1">
                <div className=" text-center font-sans font-bold  ">2000</div>
                كلمة
              </div>

              <div className=" text-start   ">
                <span
                  dir="ltr"
                  className="priceText gap-1  items-baseline flex justify-end   text-[#1B223C]  relative z-0    text-3xl font-bold"
                >
                  <div className="text-[18px] text-[#797878]  font-light">شهريًا </div>
          
                  <div className="font-sans text-[21px]">
                    {currency.cur === "-" && currency_api === "EGP"
                      ? " 0 EGP"
                      : ""}
                    {currency.cur === "-" && currency_api !== "EGP"
                      ? "$ 0"
                      : ""}
                    {currency.cur === "EGP" && " 0 EGP"}
                    {currency.cur === "USD" && " 0 $"}
                    {currency.cur === "AED" && " 0 AED"}
                    {currency.cur === "KWD" && " 0 KWD"}
                    {currency.cur === "SAR" && " 0 SAR"}
                  </div>
                </span>
              </div>
            </div>

            <button
            onClick={(e) => {
              e.stopPropagation();
              handleClickCoupon('button1', false);
            }}
              className={`  hidden  flex items-center    mb-4 mx-auto   mt-2  relative z-10  child-button text-[#797878]   bg-[#ffff]    border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-[12px] px-1 py-2 text-center   `}
            >
              <div className=" w-full" dir="ltr">
                {buttonStates['button1'] ? (
                  "هل تمتلك كوبون خصم؟"
                ) : (
                  <span className="inter-text">Mutqinai30</span>
                )}
                {buttonStates['button1']? (
                  ""
                ) : (
                  <span
                    className="text-[10px]  mt-1 ms-3 float-start "
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickCoupon('button1',true);
                    }}
                  >
                    &#x2716;
                  </span>
                )}
              </div>
            </button>
 <hr className=" text-[#E7EBFF] mx-5"/>
           <hr className=" text-[#E7EBFF] mx-5"/>    <ul
              role="list"
              className=" text-[#1B223C]  text-primary  px-4   py-5    font-light  flex flex-col gap-1   text-left"
            >      
           
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px]  ">&#x2716;</span>
                <div className=" w-full grid grid-cols-12  ">
                <p className=" col-span-10 text-sm text-start inter-text px-0 ">
                Chat GPT_4o{" "}
              </p>

        
                </div>
            
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI </span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة العادية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`  mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#ffff]  text-[#1B223C]  border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}
            >
              ابدأ الآن مجاناً
            </Link>
          </div>
          <div
            className={`flex relative     bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[1.8px]  border-opacity-[20%]  border-[#E7EBFF]  shadow-md  bg-white      text-primary   `}
          >
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="   pt-7   gap-5  rounded-t-[16px]    text-lg  font-medium text-start px-0 py-4 pb-0    items-start    w-full">
            <div className=" ms-6">
            <img
            src={rocet}
            className=" max-w-[50px]  bg-[#692BEF] mb-5 p-2 rounded-xl"
          />
          <header> باقة البداية </header>
          <div className=" font-light text-[13px]    text-[#797878]">
          استمتع بمزايا مُتقِن بشكل متقدم.
          </div>
          <div className="  flex  text-[#692BEF]  py-1 font-bold items-baseline gap-1">
            <div className=" text-center font-sans font-bold  ">50</div>
            الف كلمة
          </div>

          <div className=" text-start   ">
            <span
              dir="ltr"
              className="priceText gap-1  items-baseline flex justify-end   text-[#1B223C]  relative z-0    text-3xl font-bold"
            >
            <div className="text-[18px] text-[#797878]  font-light">شهريًا </div>
             
              <div className="font-sans text-[21px]">
              {currency.cur === "-" && currency_api ==="EGP"  ?  " 299 EGP" :""}
              {currency.cur === "-" && currency_api !=="EGP"  ?  " 6.34 $" :""}
                 {currency.cur === "EGP" &&  " 299 EGP" }
                {currency.cur === "USD" && " 6.34 $"}
                {currency.cur === "AED" && " 23.29 AED"}
                {currency.cur === "KWD" && " 1.95 KWD"}
                {currency.cur === "SAR" && " 23.79 SAR"}
              </div>
            </span>
          </div>
            
            </div>  
          
            </div>

            <button
              onClick={() =>  handleClickCoupon('button2', false)}
              className={`  hidden  flex items-center    mb-4 mx-auto   mt-2  relative z-10  child-button text-[#797878]   bg-[#ffff]    border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-[12px] px-1 py-2 text-center   `}
            >
              <div className=" w-full" dir="ltr">
                {buttonStates['button2'] ? (
                  "هل تمتلك كوبون خصم؟"
                ) : (
                  <span className="inter-text">Mutqinai30</span>
                )}
                {buttonStates['button2'] ? (
                  ""
                ) : (
                  <span
                    className="text-[14px]  ms-3 float-start "
                    onClick={(e) => {
                      e.stopPropagation();
                     handleClickCoupon('button2',true);
                    }}
                  >
                    &#x2716;
                  </span>
                )}
              </div>
            </button>

           <hr className=" text-[#E7EBFF] mx-5"/>    <ul
              role="list"
              className=" text-[#1B223C]  text-primary  px-4   py-5    font-light  flex flex-col gap-1   text-left"
            >      
            <li className="flex   text-[16px] gap-2  ">
            <span className="text-[14px] font-[800] ">✓</span>
            <div className=" w-full grid grid-cols-12  ">
            <p className=" col-span-10 text-sm text-start inter-text px-0 ">
            Chat GPT_4o{" "}
          </p>

          <img src={queen} className="  col-span-2 w-[20px]"/>
            </div>
        
          </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI </span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة العادية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`  mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#ffff]  text-[#1B223C]  border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}
            >
          اشترك الآن
            </Link>
          </div>
            <div
            className={`flex relative     bg-transparent  mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[1.8px]  border-opacity-[20%]  border-[#E7EBFF]  shadow-md  bg-white      text-primary   `}
          >
            {/* <div className=" flex justify-end w-full   ">
              <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
            </div> */}
            <div className="   pt-7   gap-5  rounded-t-[16px]    text-lg  font-medium text-start px-5 py-4 pb-0    items-start    w-full">
              <img
                src={star}
                className=" max-w-[50px] bg-[#692BEF] mb-5 p-2 rounded-xl"
              />
              <header> الباقة الاساسية  </header>
              <div className=" font-light text-[13px]    text-[#797878]">
              تجربة متكاملة ومتقدمة بشكل أكبر.
              </div>
              <div className="  flex  text-[#692BEF]  py-1 font-bold items-baseline gap-1">
                <div className=" text-center font-sans font-bold  ">200</div>
                الف كلمة
              </div>

              <div className=" text-start   ">
                <span
                  dir="ltr"
                  className="priceText gap-1  items-baseline flex justify-end   text-[#1B223C]  relative z-0    text-3xl font-bold"
                >
                <div className="text-[18px] text-[#797878]  font-light">شهريًا </div>
  
                  <div className="font-sans text-[21px]">
                 {currency.cur === "-" && currency_api ==="EGP"  ?  " 499 EGP" :""}
                {currency.cur === "-" && currency_api !=="EGP"  ?  " 10.58 $" :""}
                  {currency.cur === "EGP" && " 499 EGP"}
                  {currency.cur === "USD" && "10.58 $ "}
                  {currency.cur === "AED" && " 38.88 AED"}
                  {currency.cur === "KWD" && " 3.25 KWD"}
                  {currency.cur === "SAR" && " 39.71 SAR"}
                  </div>
                </span>
              </div>
            </div>

            <button
              onClick={() =>  handleClickCoupon('button3', false)}
              className={`  hidden  flex items-center    mb-4 mx-auto   mt-2  relative z-10  child-button text-[#797878]   bg-[#ffff]    border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-[12px] px-1 py-2 text-center   `}
            >
              <div className=" w-full" dir="ltr">
                {buttonStates['button3'] ? (
                  "هل تمتلك كوبون خصم؟"
                ) : (
                  <span className="inter-text">Mutqinai30</span>
                )}
                {buttonStates['button3'] ? (
                  ""
                ) : (
                  <span
                    className="text-[14px]  ms-3 float-start "
                    onClick={(e) => {
                      e.stopPropagation();
                     handleClickCoupon('button3',true);
                    }}
                  >
                    &#x2716;
                  </span>
                )}
              </div>
            </button>

           <hr className=" text-[#E7EBFF] mx-5"/>    <ul
              role="list"
              className=" text-[#1B223C]  text-primary  px-4   py-5    font-light  flex flex-col gap-1   text-left"
            >      
              
            <li className="flex   text-[16px] gap-2  ">
            <span className="text-[14px] font-[800] ">✓</span>
            <div className=" w-full grid grid-cols-12  ">
            <p className=" col-span-10 text-sm text-start inter-text px-0 ">
            Chat GPT_4o{" "}
          </p>

          <img src={queen} className="  col-span-2 w-[20px]"/>
            </div>
        
          </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  متقن شات{" "}
                  <span className="   font-mono    font-medium">AI </span>
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  أكثر من <span className=" font-sans font-normal">80</span>{" "}
                  نموذج محتوى
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  كتابة المقالات الاحترافية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm   text-start px-0 ">
                  التدقيق اللغوي الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
              </li>

              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  أوقات الاستجابة العادية
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm  text-start px-0 ">
                  تصدير المحتوى لملفات
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  استخدام محرر متقن الذكي 
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">
                  دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
                </p>
              </li>
              <li className="flex   text-[16px] gap-2  ">
                <span className="text-[14px] font-[800] ">✓</span>
                <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
              </li>
            </ul>

            <Link
              to="https://auth.mutqinai.com/signup"
              className={`  mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#ffff]  text-[#1B223C]  border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}
            >
               اشترك الآن 
            </Link>
          </div>
          <div className="relative bg-white package_bg  rounded-[18px] ">
          <img src={elibse} className="    absolute inset-0  h-[90%]  w-full rounded-[18px] " alt="Background"/>
          <div
          className={`flex relative      mb-4 lg:mb-0      h-full    flex-col    text-start    rounded-[18px] border-[1.8px]  border-opacity-[20%]  border-[#E7EBFF]  shadow-md      text-primary   `}
        >
          {/* <div className=" flex justify-end w-full   ">
            <div className="   text-secondary px-2 py-4 rounded-[12px] bg-white"></div>
          </div> */}
          <div className="   pt-8    gap-5  rounded-t-[16px]    text-lg  font-medium text-start px-0     items-start    w-full">
          <div className=" ms-6">
          <div className=" items-center grid grid-cols-12 ">
          
          <div className="  col-span-7">
          <img
          src={tag}
          className=" max-w-[55px]   mb-3  rounded-xl"
        />
          </div>
          <div className=" col-span-5">

          <div className=" text-white mx-3 border-[1px] border-[#fff] p-0 text-center rounded-md text-[12px] "> الأكثر طلبا</div>
          
          </div>
          
          </div>
     
        <header>  الباقة الاحترافية </header>
        <div className=" font-[600] text-[11px]     text-[#797878]">
        اشترك شهر، واحصل على شهرين  مجانًا.
        </div>
        <div className="  flex  text-[#692BEF]  py-1 font-bold items-baseline gap-1">
          
        عدد كلمات غير محدود
        </div>

        <div className=" text-start   ">
          <span
            dir="ltr"
            className="priceText gap-1  items-baseline flex justify-end   text-[#1B223C]  relative z-0    text-3xl font-bold"
          >
            <div className="text-[18px] font-light "  dir="rtl">
            <span   className=" inter-text ps-1">3</span>
            <span   className="  ps-1">أشهر</span>
            
          
            </div>

            <div className="font-sans text-[21px]">
            {currency.cur === "-" && currency_api ==="EGP"  ?  " 799 EGP" :""}
            {currency.cur === "-" && currency_api !=="EGP"  ?  "$ 16.95" :""}
            
            {currency.cur === "EGP" && " 799 EGP"}
            {currency.cur === "USD" && " 16.95 $"}
            {currency.cur === "AED" && " 62.26 AED"}
            {currency.cur === "KWD" && " 5.21 KWD"}
            {currency.cur === "SAR" && " 63.58 SAR"}
            </div>
          </span>
        </div>
          
          </div>  
        
          </div>

          <button
            onClick={() =>  handleClickCoupon('button4', false)}
            className={`  hidden  flex items-center    mb-4 mx-auto   mt-2  relative z-10  child-button text-[#797878]     border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-[12px] px-1 py-2 text-center   `}
          >
            <div className="   w-full" dir="ltr">
              {buttonStates['button4'] ? (
                "هل تمتلك كوبون خصم؟"
              ) : (
                <span className="inter-text">Mutqinai30</span>
              )}
              {buttonStates['button4'] ? (
                ""
              ) : (
                <span
                  className="text-[14px]  ms-3 float-start "
                  onClick={(e) => {
                    e.stopPropagation();
                   handleClickCoupon('button4',true);
                  }}
                >
                  &#x2716;
                </span>
              )}
            </div>
          </button>

         <hr className=" text-[#E7EBFF] mx-5"/>    <ul
            role="list"
            className=" text-[#1B223C]  text-primary  px-4   py-5    font-light  flex flex-col gap-1   text-left"
          >      
          <li className="flex   text-[16px] gap-2  ">
          <span className="text-[14px] font-[800] ">✓</span>
          <div className=" w-full grid grid-cols-12  ">
          <p className=" col-span-10 text-sm text-start inter-text px-0 ">
          Chat GPT_4o{" "}
        </p>

        <img src={queen} className="  col-span-2 w-[20px]"/>
          </div>
      
        </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm text-start px-0 ">
                متقن شات{" "}
                <span className="   font-mono    font-medium">AI </span>
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm   text-start px-0 ">
                أكثر من <span className=" font-sans font-normal">80</span>{" "}
                نموذج محتوى
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm   text-start px-0 ">
                كتابة المقالات الاحترافية
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm   text-start px-0 ">
                التدقيق اللغوي الذكي 
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm  text-start px-0 ">تحويل الصوت لنص </p>
            </li>

            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm  text-start px-0 ">
                أوقات الاستجابة العادية
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm  text-start px-0 ">
                تصدير المحتوى لملفات
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm text-start px-0 ">
                استخدام محرر متقن الذكي 
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm text-start px-0 ">
                دعم أكثر من <span className=" font-sans">100</span> لغة مختلفة
              </p>
            </li>
            <li className="flex   text-[16px] gap-2  ">
              <span className="text-[14px] font-[800] ">✓</span>
              <p className=" text-sm text-start px-0 ">التحديثات الشهرية</p>
            </li>
          </ul>

          <Link
            to="https://auth.mutqinai.com/signup"
            className={`  mb-4 mx-auto   mt-2  relative z-10  child-button   bg-[#1B223C]  text-[#fff]  border-[#1B223C] border-[1px]   focus:ring-4 focus:ring-[#C0ADF5] font-medium rounded-[12px]  w-[85%] text-sm px-10 py-2 text-center   `}
          >
        اشترك الآن
          </Link>
        </div>
          </div>
   
        </div>
      </div>

       
     
    </section>
  );
};

export default Packages;
