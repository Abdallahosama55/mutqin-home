import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import illustation from "../assets/git_home.gif";
import line from "../assets/line.png";

import rocket from "../assets/fluent_rocket-24-filled.png";
import TextError from "./TextError";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import threelines from '../assets/three_lines.png';
import search from '../assets/mingcute_search-line.png'
import lines from '../assets/hero-7-top-line.png.png'

const HomeTextSection = () => {

  const texts = [
    "وصف منتجات",
    " المقالات والمدونات",
    "الافكار الإعلانية",
    "سكريبتات فيديوهات",
    "أكثر من 80 نموذج محتوى ",
    "منشورات وسائل تواصل اجتماعي ",
    "المحتوى الإعلاني ",
    // Add more texts as needed
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeIn(true);
      }, 500); // Half of the transition duration
    }, 2000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [texts.length]);

  const initialValues = {
    chat: "",
  };

  const validationSchema = Yup.object({
    chat: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log(values.chat);
  };
  return (
    <section
      id="home"
      className="  relative  w-[100%]     mx-auto  ">
      <div className="w-[100%] flex justify-center">
      <img src={lines} className=" absolute   w-[80%] top-[0%] z-0   "/>
      
      </div>
    
      <img src={threelines} className=" absolute   top-[60%] left-[45%] z-0 w-[60%]  h-[40vh] "/>
      <div className="grid grid-cols-1   justify-center  mx-[5%]  lg:mx-[31%] md:mx-[31%] xl:mx-[31%] m-0">
   
      <div className="  text-dev  ">
      <div className="   py-6 pt-12 mt-2   relative flex flex-col  justify-center items-center   gap-3   ">

      <h2
      dir="rtl"
      className="   flex text-[32px]  md:text-[40px]  font-[600]  items-center  justify-center   text-[#1F2A37]  ">
      إنشاء عدد غير محدود من
    </h2>
    <h3
    dir="rtl"
    className={`md:text-[35px] text-[20px] font-[600] text-[#692BEF] transition-text ${fadeIn ? 'fade-in' : 'fade-out'}`}
  >
            {texts[currentTextIndex]}
        
          </h3>
     
      
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className=" text-center  border-[1px] border-[#001A78] relative z-19      py-2 sm:gap-4 px-3 items-center  sm:justify-between sm:px-3 flex   rounded-[8px]">
          <div className=" bg-white  gap-3  text-center  relative z-19   w-full      sm:gap-4 px-4 items-center  sm:justify-between sm:px-4 flex   rounded-[8px]">
      
          <Link
          to="https://auth.mutqinai.com/signup"
          // type="submit"
          className="relative   hover:bg-[#5225cedb]    px-10    sm:py-1  text-white bg-[#5225CE] rounded-[10px] ">
          <img
            src={rocket}
            className=" sm:block     w-5 h-4 sm:h-[24px] md:w-[24px] sm:w-[24px] sm:h-[24px] absolute top-[5px] left-[70px] sm:top-[4px] sm:left-[70px]"
          />
          بدء
        </Link>
        <div dir="rtl" className="  ps-1 w-[100%] ">
      
          <Field
            type="text"
            id="chat"
            name="chat"
            className="outline-none placeholder:text-[12px]  w-full  py-1    px-2 grow placeholder:opacity-50 text-[16px] text-primary rounded-[10px] sm:py-2   font-light "
            placeholder="قم بإنشاء خطة محتوي لوسائل التواصل الاجتماعي لبراند ملابس مدتها 3 أشهر بهدف زيادة المبيعات و..."
          />
       
        </div>
        <img src={search} className=" w-[20px]"/>
          </div>  
   
          </div>
          <ErrorMessage
            name="chat"
            component={TextError}
          />
        </Form>
      </Formik>

      <div className="absolute z-5   flex border-[10px] mt-6 border-[#692BEF] rounded-[12px]   img-dev align-center relative  ">
      
      
      
    
      <img src={illustation}   className="w-full h-[320px]"/>
      
      
      </div>
      </div>

    </div>
  

    </section>
  );
};

export default HomeTextSection;