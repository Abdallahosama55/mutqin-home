import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import illustation from "../assets/illustrationhigh.png";
import line from "../assets/line.png";
import isrocket from "../assets/vectorroceket.png";
import rocket from "../assets/fluent_rocket-24-filled.png";
import TextError from "./TextError";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import threelines from '../assets/three_lines.png';
import search from '../assets/mingcute_search-line.png'
import lines from '../assets/hero-7-top-line.png.png'
import videoSource from "../assets/forgetSection/main.mp4"
const HomeTextSection = () => {
  const [hovered, setHovered] = useState(false);
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
      id="banner"
      className="  relative  w-[100%]     mx-auto  ">
      <div className="flex justify-center">
  
      </div>
    
      <img src={threelines} className=" absolute   top-[60%] left-[45%] z-0 w-[60%]  h-[40vh] "/>
      <div className="grid grid-cols-1   justify-center  mx-[5%]  lg:mx-[30%] md:mx-[30%] xl:mx-[30%] m-0">
   
      <div className="  text-dev  ">
      <div className="    pb-6   relative flex flex-col  justify-center items-center   gap-3   ">

      <h2
      dir="rtl"
      className="   flex text-[30px] mt-3  md:text-[45px]  font-[600]  items-center  justify-center   text-[#1F2A37]  ">
      إنشاء عدد غير محدود من
    </h2>
    <h3
    dir="rtl"
    className={`md:text-[35px] text-[20px] font-[600] text-[#692BEF] transition-text ${fadeIn ? 'fade-in' : 'fade-out'}`}
  >
            {texts[currentTextIndex]}
        
          </h3>
     
      
      </div>
      <div className="  ">
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className=" ">
          <div className=" bg-white py-2   mx-4 md:mx-12  gap-3  text-center  relative z-19        sm:gap-4 px-4 items-center  sm:justify-between sm:px-4 flex   rounded-[8px]">
      
          <Link
          to="https://auth.mutqinai.com/signup"
          // type="submit"
          className="relative text-[8px] md:text-[10px] xl:text-[12px] lg:text-[13px] flex items-center hover:bg-[#5225cedb] text-start ps-5 w-[160px] sm:py-1 text-white bg-[#5225CE] rounded-[6px] "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ transition: 'opacity 0.3s, transform 0.3s' }}
        >
          <span style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.3s' }}>ابدأ مجانا</span>
          <img
            src={hovered ? isrocket:rocket}
            className={`sm:block w-8 h-8  transform ${
              hovered ? 'md:-translate-x-[100%] -translate-x-[75%] translate-y-1/8 w-5 h-[23px]  my-1  ' : 'translate-x-0 translate-y-0'
            }`}
            style={{ transition: 'transform 0.3s' }}
            alt="Rocket"
          />
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

      <div className="relative z-5 p-0 h-100 flex border-[10px] mt-6 border-[#692BEF] rounded-[12px] align-center relative">
  <video  autoPlay={true} loop={true} muted={true} playsInline={true} className="w-full md:h-[100]" >
  
  <source src={videoSource} type="video/mp4" />
  
  </video>
</div>

      
      </div>

      </div>

    </div>
  

    </section>
  );
};

export default HomeTextSection;