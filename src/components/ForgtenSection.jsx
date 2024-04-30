import React, { useState } from "react";
import chapter from "../assets/forgetSection/files.png";
// import chapter from "../assets/chapter 1 1.png";
// import ai from "../assets/eos-icons_ai.png";
import ai from "../assets/eos-icons_ai.png";
// import ri from "../assets/ri_pen-nib-fill.png";
import ri from "../assets/ri_pen-nib-fill.png";
// import fa from "../assets/fa6-solid_file-pen.png";
import fa from "../assets/forgetSection/fa6-solid_file-pen.png";
import ma from "../assets/forgetSection/Frame 1171276676.png";
// import ma from "../assets/material-symbols-light_photo-library-rounded.png";

import chat from "../assets/chat0.png";
import content from "../assets/content.png";
import detector from "../assets/detector.png";
import article from "../assets/article.png";
import secGirl from "../assets/girl chatting online.png";
import womanAndMan from "../assets/woman and man working together.png";
import guyWithbag from "../assets/guy with backpack and laptop.png";
import youngWoman from "../assets/young woman in hijab stands with a phone in her hand.png";
import ForgetComp from "./ForgetComp";
import { Link } from "react-router-dom";
const items = [
  {
    title: "مُتقِن شات Ai",
    image: ai,
  },
  {
    title: "كتابة مقال احترافي",
    image: ri,
  },
  {
    title: "حلول التدقيق اللغوي",
    image: fa,
  },
  {
    title: "  اقسام محتوي متنوعة",
    image: ma,
  },
 
  // Add more items as needed
];
const avatars = [
  {
    id: 1,
    title: "تجربة دردشة استثنائية تمنحك تفاعلًا فريدًا مع Ai",
    header: "مُتقِن شات Ai",
    image: chat,
    color: "#DCFFEF",
    pragraph: [
      "تحسين التفاعل البشري مع Ai من خلال نظام دردشة متطور.",
      "قدرة نظام متقن علي فهم السياق للحصول علي إجابات دقيقة.",
      "دعم للعديد من الغات و المفاهيم المختلفة لتلبية مختلف الطلبات.",
      "تكنولوجيا تعلم الآلة لتحسين أداء دردشة Ai بشكل مستمر.",
    ],
  },
  {
    id: 2,
    title: "كتابة مقالات احترافية بسهولة باستخدام مُتقِن",
    header: "كتابة مقال احترافي",
    image: article,
    color: "#FFEBFD",
    pragraph: [
      "كتابة محتوى ذكي بتقنيات متقن لإنشاء مقالات بجودة عالية.",
      "قاعدة بيانات متكاملة من المصادر لتوفير محتوي دقيق وموثوق.",
      "قدرة متقن على اتباع أسلوب الكتابة وضبط المستوى اللغوي.",
      "إنشاء محتوى واقعي كامل ليتفاعل مع القرّاء باستخدام متقن.",
    ],
  },
  {
    id: 3,
    title: "ضمان دقة اللغة بفضل المدقق اللغوي الذكي",
    header: "حلول التدقيق اللغوي",
    image: detector,
    color: "#CBE3FA",
    pragraph: [
      "تقنيات متقدمة للتحقق من الأخطاء اللغوية وتحسين المحتوي.",
      "دعم لعدة لغات لتلبية احتياجات مختلف العملاء وتعدد اللغات.",
      "توفير اقتراحات بناءة لتحسين التعبير والأسلوب وتعزيز فهم النص.",
      "حسين لغوي فوري، لتسهيل تدقيق النصوص وتوفير الوقت.",
    ],
  },
  {
    id: 4,
    title: "أنشئ أكثر من 80 نوعًا من نماذج المحتوي في ثوانٍ",
    header: "اقسام محتوي متنوعة",
    image: content,
    color: "#FFEBFD",
    pragraph: [
      "عملية إنشاء محتوى سريعة، فقط اختر القسم وأدخل التفاصيل.",
      "مكن للأداة توجيه المحتوى للجمهور المستهدف بشكل دقيق.",
      "تحسين أداء المواقع والسوشيال ميديا من خلال محتوى متميز.",
      "حلاً سريعاً وفعالاً لإنشاء المحتوى. يمكنك من توفير الوقت والجهد.",
    ],
  },
];

const ForgtenSection = () => {
  return (
    <section id="used" className="  mb-10  relative ">
      <div
        dir="rtl"
        className="   py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6"
      >
        <div className="  text-black max-w-[1100px] mx-auto text-center ">
          <div>
            <h2 className=" mb-8 text-2xl text-tertiary md:text-[40px] tracking-tight font-medium  ">
              مُتقِن ليست مجرد أداة، بل هي شريكك في النجاح
            </h2>
            <p className=" mb-10 sm:text-[18px]  max-w-4xl mx-auto text-black   font-medium">
              في عالم مليء بالتحديات والتنافس المتزايد، يلعب الذكاء الاصطناعي
              دوراً حاسماً في تحسين الأداء وتعزيز الابتكار، لذلك نقدم أدوات ذكاء
              اصطناعي فريدة تسهم في إعطاء استراتيجيتك دفعة قوية لتحقيق النجاح.
            </p>
            <p className=" mb-10 sm:text-[15px] text-black   font-light">
              نحن ندرك أهمية وقتك، ولذلك قمنا بتصميم أدواتنا لتسهيل وتسريع
              عملياتك التجارية.
            </p>
          </div>

          <div className="grid mb-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-[#FFF7CC] text-[#5225CE] p-4 rounded-[12px] flex flex-col">
            <div className="flex-grow">
              <h3 className="text-start text-[20px] pb-5">{item.title}</h3>
            </div>
            <div className="flex justify-end">
              <img src={item.image} className="w-[75px] align-self-end" alt={item.title} />
            </div>
          </div>
          
          ))}

           

       
          </div>

          {avatars.map((avatar) => (
            <div
              className={`mb-6 bg-${avatar.id} py-12 xl:pe-0 lg:pe-0  md:pe-0 justify-content-center min-h-[520px]  border-[1px] rounded-[10px] p-5  border-secondary border-opacity-[10%] grid  mx-auto`}
            >
              <ForgetComp
                key={avatar.id}
                image={avatar.image}
                title={avatar.title}
                header={avatar.header}
                pragraph={avatar.pragraph}
                button={avatar.button}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForgtenSection;
