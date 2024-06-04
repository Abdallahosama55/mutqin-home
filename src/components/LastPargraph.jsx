import React from "react";
import Icon798 from "../assets/Ellipse 798.png";
import Icon799 from "../assets/Ellipse 799.png";
import Icon800 from "../assets/Ellipse 800.png";
import Icon701 from "../assets/Frame 701.png";
import { Link } from "react-router-dom";

const LastPargraph = () => {
  return (
    <section className=" bg-transparent relative ">
      <div
        dir="rtl"
        className="  relative z-20 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:px-6">
        <div className=" text-primary max-w-screen-xl mx-auto text-center mb-8 lg:mb-16">
   
          <p className=" mb-10  text-[18px] mt-12 md:mt-auto  font-[500] text-[#5225CE] leading-[2rem]  max-w-[850px] mx-auto  ">
            مع مُتقِن، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين
            تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات،
            فيديوهات، أو محتوى تفاعلي، فإن{" "}
         متقن يوفر لك
            الأدوات الضرورية لتحقيق أداء استثنائي.
          </p>
          <h2 className="mb-8  text-[19px] tracking-tight    text-[#001B79] opacity-50  font-[500] text-center ">
            ماذا عنك؟ هل أنت جاهز للانضمام إلى مجتمع المحترفين الذين اختاروا
            مُتقِن لتحقيق أهدافهم وتجاوز توقعاتهم؟
          </h2>
          <Link
            to="https://auth.mutqinai.com/signup"
            className="inline-flex md:items-start  hover:border-secondary   hover:border-[1px] hover:bg-white hover:text-secondary    items-center justify-center px-10 py-3 text-base font-medium text-center  bg-secondary text-white border border-secondary rounded-[10px]   ">
            ابدأ الآن مَجاناً
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LastPargraph;
