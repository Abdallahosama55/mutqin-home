import React, { useState,useEffect } from "react";
import firework from "../../assets/firework.svg";
import righticon from "../../assets/modal/Check Circle Icon.png";
import queen from "../../assets/modal/queen.png";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Modal = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(18);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval);
            // Timer reached 0, do something here
          } else {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

  const closeModal = () => {
    setModalOpen(false);
    console.log("close");
  };
  const features = [
    { text: "لكتابة مقالات احترافية" },
    { text: "التدقيق اللغوي والنحوي" },
    { text: "التحدث مع متقن شات GPT-4"} ,
    { text: "التسويق عبر البريد الإلكتروني " },
    { text: "تخطيط استراتيجيات المحتوى" },
    { text: "التسويق لوسائل التواصل الاجتماعي" },
    { text: "كتابة وصف المنتجات بشكل جذاب" },
    { text: "وأكثر من ٨٠ نموذج مختلف من المحتوى." },

    
  ];
  return (
    <div
      className={`fixed inset-0 ${
        modalOpen === false ? "hidden" : "block"
      } box-bg bg-gray-500 bg-opacity-20 flex justify-center items-center`}
    >
      <div className="bg-white box-modal md:w-[70%] overflow-y-auto md:h-[70%] w-[80%] md:min-h-[75%] min-h-[75%]   sm:min-h-[95%] p-0 rounded-xl shadow-lg relative">
        <div className="mb-4">
          <div className=" text-gray-600 hover:text-gray-800">
            <img src={firework} className="w-[100px]" alt="Firework" />
          </div>
          <div onClick={closeModal}>
            <div
              className="  absolute left-[90%] text-[#DC1616] text-[28px] z-50 absolute md:left-[96%] top-[1%]   md:text-3xl"
              onClick={closeModal}
            >
              {" "}
              <IoIosCloseCircleOutline className=" w-full" />
            </div>
          </div>
        </div>

        <div className="">
          <div class="grid grid-cols-12 w-full top-[5%] absolute text-[#692BEF]  w-full flex absolute z-0 w-[100%]     gap-4">
            <div class=" relative p-4 lg:col-span-7 col-span-12 xl:col-span-7 xxl:col-span-7  " dir="rtl">
              <header>
                <h2 className=" md:text-[1.4rem] text-[1rem] md:w-[100%] w-[70%] md:py-0 py-3">
                  اكتب محتوي بلا حدود لمدة ثلاثة أشهر!!
                </h2>
                <div className=" md:w-[55%] w-[90%] py-4  leading-[1.5]">
                  اشترك لمدة شهر، واحصل على شهرين إضافيين مجانًا لفترة محدودة
                  الآن.
                </div>
              </header>
              <main>
                <div className=" md:w-[59%] relative  w-[98%]  table mt-5 bg-[#692BEF4D] rounded-2xl">
              <img src={queen} className="  p-0 absolute top-100  top-[-18%] md:right-[83%] right-[85%]  md:w-[90px] w-[90px]"/>
                <h1 className=" bg-[#692BEF99] py-2 text-center text-white w-full rounded-[12px]">
                    الأكثر طلباً
                  </h1>
                  <div className="block px-3  mb-5">
                    <h3 className=" p-2  py-5 text-white ">ثلاثة أشهر </h3>
                    <span className="strikediag  m-2 p-0 text-[#E60000] font-sans">
                    EGP   2400 
                    </span>
                 
                    <h3 className=" p-2 py-3 text-white  text-[19px]  ">
                      <span className=" font-sans text-[#FADF00] font-[600]">
                      EGP     799 
                      </span>{" "}
                      \ عدد كلمات غير محدود
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 w-[95%] md:top-[90%]  absolute  ">
                  <div className=" mt-5">
      
<div className=" bg-[#E60000B2] text-white  font-thin p-2 rounded-xl text-[.9rem]   "> عرض حصري ينتهي خلال</div>
                  </div>
                  <div className=" p-4">
                  
                  <div className="grid grid-cols-3 gap-2">
                  <div ><h3 className=" inter-text  font-[700] flex justify-center text-[1.3rem] flex align-center">{formatTime(hours)} <span className=" mr-2 text-[1.3rem] p-0  flex ">:</span>  </h3>
                  
                  <p className=" font-thin text-[12px]  ">ساعات</p>
                  </div>
                  <div className="">
                  <h3  className=" inter-text font-[700] text-[1.3rem] justify-between flex">{formatTime(minutes)} <span className="text-[1.3rem] mr-2">:</span></h3>
                  <p className=" font-thin text-[12px] ">دقائق</p>
                  </div>
                  <div className="">
                  
                  <h3 className=" inter-text font-[700] text-[1.3rem]">  {formatTime(seconds)} </h3>
                 
                  <p className=" font-thin text-[12px]  ">ثواني</p>
                  </div>
            
                </div>
                
                  
                  </div>
                  <div className="  px-3  mt-7">
                  
                  <Link className="p-2 px-7 text-center text-white rounded-md bg-[#7238F0] font-thin" to="https://auth.mutqinai.com/#/signup">اشترك الان</Link>
                  
                  </div>
                </div>
              </main>
            </div>
            <div dir="rtl" className=" hidden xl:block xxl:block lg:block md:block p-4 md:col-span-5 col-span-12   md:border-l-[2px]  h-[65vh] border-opacity-60 border-[#692BEF99]">
          <header>
           <h3 className=" px-3  md:text-[1.4rem] text-[1rem]">مُتقِن خيارك الأول لكتابة المحتوي!
           </h3>
           <h4 className="p-3 text-[1.2rem]">سواء كان ذلك..
           </h4>
          
          </header>
           <main className=" mt-5 px-3">
           <div className="grid md:grid-cols-12 gap-4 flex align-center justify-center">
           {features.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 flex align-center py-1">
                <img src={righticon} className="w-[100%]" alt="icon" />
              </div>
              <div className="col-span-11 text-[1rem]">
                <span>{item.text}</span>
              </div>
            </React.Fragment>
          ))}
           
           </div>
           
           
           </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
