import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import illustation from "../assets/illustrationhigh.png";
import line from "../assets/line.png";

import rocket from "../assets/fluent_rocket-24-filled.png";
import TextError from "./TextError";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeTextSection = () => {

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
      className="  relative lg:w-[86%] xl:w-[86%] w-[100%] mt-6     mx-auto  ">

      <div className="grid grid-cols-1    xl:grid-cols-2 lg:grid-cols-2 p-0 m-0">
      <div className=" flex     order-last md:order-first img-dev align-center relative  "> <Link  className=" z-15  top-[79%] left-[55%] bg-transparent  ps-32 py-6  absolute " to="https://auth.mutqinai.com/signup"></Link><img src={illustation} /></div>
      <div className=" p-4 md:mt-[20%] mt-9 text-dev md:py-12 ">
      <div className="  px-5 py-4  mb-12   relative flex flex-col  justify-between items-center   gap-8    ">

        <h1
          dir="rtl"
          className="   flex  lg:pe-16 line-h1-height  pe-4 items-center flex-wrap justify-center lg:text-4xl md:text-4xl xl:text-4xl text-2xl leading-10 sm:text-[32px]  text-[#5225CE]  ">
          مساحتك اللانهائية من الإبداع لتحسين إنتاجية عملك!
        </h1>
        <div className="text-md  font-medium text-[#001B79]">
          <p
            dir="rtl"
            className=" max-w-[700px]">
            ابدأ الآن{" "}
            <span className="  text-secondary">مجانًا</span> مع
            مُتقِن، وأنشئ أكثر من نموذج محتوى في ثوانٍ، للمدونات والمقالات
            والإعلانات والمنتجات والمواقع الإلكترونية ووسائل التواصل الاجتماعي.
          </p>
        </div>
      
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className="gap-3  text-center  border-[1px] border-[#692BEF33] relative z-19 justify-between      py-1 sm:gap-4 px-4 items-center  sm:justify-between sm:px-4 flex   rounded-[10px]">
            <Link
              to="https://auth.mutqinai.com/signup"
              // type="submit"
              className="relative   hover:bg-[#5225cedb]    px-10   py-1  sm:py-2 sm:px-[55px] text-white bg-[#5225CE] rounded-[10px] ">
              <img
                src={rocket}
                className=" sm:block   me-7  w-6 h-6 sm:w-[32px]  sm:h-[32px] absolute top-[4px] left-[70px] sm:top-[5px] sm:left-[90px]"
              />
              بدء
            </Link>
            <div dir="rtl" className="  ps-1 w-[100%] ">
          
              <Field
                type="text"
                id="chat"
                name="chat"
                className="outline-none border-[1px] border-[#692BEF33]  placeholder:text-[12px]  w-full  py-1    px-2 grow placeholder:opacity-50 text-[16px] text-primary rounded-[10px] sm:py-2   font-light "
                placeholder="قم بإنشاء خطة محتوي لوسائل التواصل الاجتماعي لبراند ملابس مدتها 3 أشهر بهدف زيادة المبيعات و..."
              />
            </div>
          </div>
          <ErrorMessage
            name="chat"
            component={TextError}
          />
        </Form>
      </Formik>
      </div>

    </div>
    <img src={line} className="md:pb-12 md:mb-24"/>

    </section>
  );
};

export default HomeTextSection;