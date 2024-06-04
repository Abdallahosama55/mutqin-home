import React, { useState } from "react";
import chapter from "../assets/forgetSection/files.png";
// import chapter from "../assets/chapter 1 1.png";
// import ai from "../assets/eos-icons_ai.png";
import ai from "../assets/forgetSection/eos-icons_ai (1).png";
// import ri from "../assets/ri_pen-nib-fill.png";
import ri from "../assets/forgetSection/ri_pen-nib-fill (1).png";
// import fa from "../assets/fa6-solid_file-pen.png";
import fa from "../assets/forgetSection/fa6-solid_file-pen.svg";
import ma from "../assets/forgetSection/Frame 1171276676.png";
// import ma from "../assets/material-symbols-light_photo-library-rounded.png";

import chat from "../assets/forgetSection/chat.mp4";
import detector from "../assets/forgetSection/detect.mp4";
import article from "../assets/forgetSection/art.mp4";
import ForgetComp from "./ForgetComp";
import centerlines from '../assets/center_lines.png'
import chatIcon1 from  "../assets/forgetSection/hugeicons_touch-interaction-03.png"
import chatIcon2 from  "../assets/forgetSection/streamline_collaborations-idea.png"
import chatIcon3 from  "../assets/forgetSection/arcticons_mondly-languages.png"
import chatIcon4 from  "../assets/forgetSection/carbon_improve-relevance.png"

import artIcon1 from  "../assets/forgetSection/icon-park-outline_writing-fluently.png"
import artIcon2 from  "../assets/forgetSection/codicon_workspace-trusted.png"
import artIcon3 from  "../assets/forgetSection/icon-park-outline_text-style.png"
import artIcon4 from  "../assets/forgetSection/material-symbols-light_interactive-space-outline-rounded.png"


import detectIcon1 from  "../assets/forgetSection/streamline_hand-held-tablet-writing.png"
import detectIcon2 from  "../assets/forgetSection/lucide_languages.png"
import detectIcon3 from  "../assets/forgetSection/hugeicons_idea-01.png"
import detectIcon4 from  "../assets/forgetSection/bi_list-check.png"
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
      "تفاعل بشري متطور",
      "فهم سياق دقيق",
      "دعم لغات متنوعة",
      "تحسين مستمر",
    ],
    img_src: [
     chatIcon1,
     chatIcon2,
     chatIcon3,
     chatIcon4,
    ],
  },
  {
    id: 2,
    title: "كتابة مقالات احترافية بسهولة باستخدام مُتقِن",
    header: "كتابة مقال احترافي",
    image: article,
    color: "#FFEBFD",
    pragraph: [
      "كتابة مقالات متقنة ",
      "مصادر دقيقة موثوقة",
      "أسلوب لغوي مضبوط",
      "محتوى تفاعلي واقعي ",
    ],
    img_src: [
      artIcon1,
      artIcon2,
      artIcon3,
      artIcon4,
     ],
    
  },
  {
    id: 3,
    title: "ضمان دقة اللغة بفضل المدقق اللغوي الذكي",
    header: "حلول التدقيق اللغوي",
    image: detector,
    color: "#CBE3FA",
    pragraph: [
      "تحسين لغوي متقدم ",
      "دعم لغات متعددة",
      "اقتراحات تعبيرية",
      "تدقيق فوري سريع",
    ],
    img_src: [
      detectIcon1,
      detectIcon2,
      detectIcon3,
      detectIcon4,
     ],
  },

];

const ForgtenSection = () => {
  return (
    <section id="used" className="    relative ">
      <div
        dir="rtl"
        className="   pt-4 pb-0 px-4 mx-auto max-w-screen-xl lg:px-6 max-w-[1100px]"
      >
        <div className="  text-black max-w-[1100px] mx-auto text-center ">
          <div>
            <h2 className=" mb-8  mt-12 text-2xl text-tertiary md:text-[40px] tracking-tight font-medium  ">
              مُتقِن ليست مجرد أداة، بل هي شريكك في النجاح
            </h2>
            <p className=" mb-10 sm:text-[18px]  max-w-4xl mx-auto text-[#1B223C]   font-medium">
              في عالم مليء بالتحديات والتنافس المتزايد، يلعب الذكاء الاصطناعي
              دوراً حاسماً في تحسين الأداء وتعزيز الابتكار، لذلك نقدم أدوات ذكاء
              اصطناعي فريدة تسهم في إعطاء استراتيجيتك دفعة قوية لتحقيق النجاح.
            </p>

          </div>

          <div className="grid mb-6  mx-7 md:mx-auto xl:grid-cols-3 xl:px-24 lg:px-24 md-px-24 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-[#FFF7CC] text-[#5225CE] p-4 rounded-[12px] flex flex-col">
            <div className="flex-grow">
              <h3 className="text-start text-[20px] pb-5">{item.title}</h3>
            </div>
            <div className="flex justify-end ">
              <img src={item.image} className="w-[75px] align-self-end" alt={item.title} />
            </div>
          </div>
          
          ))}

           

       
          </div>

          {avatars.map((avatar) => (
            <div
              className={`mt-6 md:mt-12 bg-${avatar.id}    xl:pe-0 lg:pe-0  md:pe-0 justify-content-center   border-[1px] rounded-[10px] p-5 pt-0 pb-0  border-secondary border-opacity-[10%] grid  mx-auto`}
            >
              <ForgetComp
              img_src={avatar.img_src}
                key={avatar.id}
                num_key={avatar.id}
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
 
      <div className="    flex justify-center">
      <img src={centerlines} className="  "/>
      
      </div>
      <div className=" px-12 md:px-56">

      <hr className=" mb-12 gradient-border"/>
      </div>
    </section>
  );
};

export default ForgtenSection;
