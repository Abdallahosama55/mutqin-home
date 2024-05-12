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
          <div className="    my-12 relative  text-center  max-w-[100px] mx-auto h-12">
            <img
              className="  w-12 h-12  z-10  left-[-20px] absolute"
              src={Icon798}
              alt="Icon"
            />
            <img
              className="  w-12 h-12 z-20 left-4 absolute"
              src={Icon799}
              alt="Icon"
            />
            <img
              className="  w-12 h-12 z-20  absolute"
              src={Icon800}
              alt="Icon"
            />
            <img
              className="  w-12 h-12 z-30  right-[-35px] absolute"
              src={Icon701}
              alt="Icon"
            />
          </div>
          <p className=" mb-10  text-[18px]  font-bold text-[#5225CE]  max-w-[850px] mx-auto  ">
            مع مُتقِن، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين
            تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات،
            فيديوهات، أو محتوى تفاعلي، فإن{" "}
         متقن يوفر لك
            الأدوات الضرورية لتحقيق أداء استثنائي.
          </p>
          <h2 className="mb-8  text-[19px] tracking-tight    text-[#001B79] opacity-50  font-medium text-center ">
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
