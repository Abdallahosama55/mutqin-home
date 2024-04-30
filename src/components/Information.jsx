import React, { useState } from "react";
import informationbg from "../assets/info/info.png";
import { Link } from "react-router-dom";

const customList = [
  {
    header: "ما هي شركة مُتقِن؟",
    id: 1,
    pargraph:
      "مُتقِن هي شركة متخصصة في تقديم حلول الذكاء الاصطناعي، حيث تركز على تطوير أدوات متقدمة لإنشاء المحتوى وتحسين محركات البحث.",
  },
  {
    header: "ما هي أهمية استخدام أدوات الذكاء الاصطناعي في مجال إنشاء المحتوى؟",
    id: 2,
    pargraph:
      "تساعد أدوات الذكاء الاصطناعي من مُتقِن في تحسين جودة المحتوى، كما توفر حلاً مبتكرًا لتحسين أداء المحتوى عبر محركات البحث.",
  },
  {
    header: "هل توفر مُتقِن دورات تدريبية لاستخدام أدواتها؟",
    id: 3,
    pargraph:
      "نعم، نقدم دورات تدريبية مخصصة لمستخدمينا لضمان استفادة كاملة من أدواتنا، مما يسهم في تعزيز مهاراتهم في مجال إنشاء المحتوى.",
  },
  {
    header:
      "كيف يمكن للشركات الاستفادة من استخدام أدوات مُتقِن في استراتيجيات التسويق الرقمي؟",
    id: 4,
    pargraph:
      "يساعد استخدام أدواتنا في تعزيز رؤية العلامة التجارية عبر الإنترنت، وتحسين ترتيب محركات البحث، وتحقيق نتائج أفضل في حملات التسويق الرقمي.",
  },
  {
    header: "هل يمكنني تجربة أدوات مُتقِن قبل الاشتراك؟",
    id: 5,
    pargraph:
      "نعم، نقدم فترة تجريبية مجانية لأدواتنا حيث يمكن للعملاء تقييم فعالية أدواتنا قبل اتخاذ قرار بالاشتراك.",
  },
  {
    header: "هل تقدم مُتقِن دعمًا فنيًا لعملائها؟",
    id: 6,
    pargraph:
      "نعم، لدينا فريق دعم فني مخصص يعمل على مدار الساعة لمساعدة عملائنا في حل أي مشكلات أو استفسارات قد تطرأ.",
  },
  {
    header: "هل تقدم مُتقِن خدمات مخصصة لمتطلبات الشركات الكبيرة؟",
    id: 7,
    pargraph:
      "نعم، لدينا حلول مخصصة تتناسب مع احتياجات الشركات الكبيرة، حيث يمكن تخصيص منتجاتنا وفقًا لمتطلباتها الفريدة.",
  },
];

const Information = () => {
  const [openStates, setOpenStates] = useState(customList.map(() => false));

  const handleToggle = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  return (
    <div
      className=" relative py-5"
      id="footer">
      <section className="px-4 py-2 relative z-20 mt-2 sm:grid sm:grid-cols-2 gap-2 max-w-[1200px] mx-auto  ">
        <div
          dir="rtl"
          className=" col-span-1  font-[600]   max-h-[650px] overflow-y-auto scroll-information  bg-white rounded-[10px] custom-SHadow text-primary px-10 py-8 mx-auto divide-y-[1px]">
          {customList.map((item, index) => {
            return (
              <div
                key={index}
                className="py-4 transition duration-900      ease-in-out ">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex text-[14px] gap-8 text-start  items-start w-full px-2 justify-between">
                  <p>{item.header} </p>
                  <div className="   text-xl ">
                    {openStates[index] ? "-" : "<"}
                  </div>
                </button>
                {openStates[index] && (
                  <p className="pt-4 max-w-xl text-[15px]  text-start font-light ">
                    {item.pargraph}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div
          dir="rtl"
          className=" mt-16  py-3 sm:mt-0 relative flex flex-col font-bold  custom-SHadow  justify-center gap-4 sm:py-1 text-primary col-span-1 bg-white rounded-[10px] p-4 max-h-[290px]  text-start">
          <h1 className=" md:text-3xl text-2xl  md:max-w-[50%]">
            فريق الدعم لدينا هنا للمساعدة
          </h1>
          <p className=" font-normal  text-md">
            تواصل معنا للإجابة على استفساراتك في أسرع وقت ممكن.
          </p>
          <Link
            to="mailto:info@mutqinai.com"
            className=" my-3 max-w-[230px] text-[12px] py-3 bg-[#5226CD] text-white hover:bg-blue-900  rounded-[10px] px-20">
            تواصل معنا
          </Link>
          <img
            className=" absolute -z-10 md:w-[300px] h-[300px]  md:h-[375px] right-[-45px] bottom-[-85px] "
            src={informationbg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Information;
