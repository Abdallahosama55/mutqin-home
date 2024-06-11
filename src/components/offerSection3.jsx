import React from 'react';
import illustration from '../assets/offerpage/cuate.png';
import line from '../assets/offerpage/Vector 771.png';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: 'أداة المحسن البشري',
    description: 'تحويل المحتوى المكتوب بالذكاء الاصطناعي إلى محتوى بشري 100%',
  },
  {
    id: 2,
    title: 'أداة منجز',
    description: 'مساعدتك الذكي لإدارة وتنفيذ المشاريع الكبيرة في كتابة المحتوى بكفاءة وسهولة',
  },
  {
    id: 3,
    title: 'إضافات مختلف اللهجات العربية',
    description: 'لتوسيع نطاق جمهوركم والوصول إلى جميع أنحاء الوطن العربي',
  },
  {
    id: 4,
    title: 'إضافة تحليلات المحتوى',
    description: 'لتحسين الأداء ومعرفة نقاط القوة والضعف في محتواكم بشكل دقيق',
  },
  {
    id: 5,
    title: 'إطلاق منصة متقن أكاديمي',
    description: 'مع اشتراكك مدى الحياة، ستتمكن من الوصول إلى منصة متقن أكاديمي، لاكتساب مهارات قيمة في كتابة المحتوى، ورفع مستوى مهاراتك إلى آفاق جديدة.',
  },


];

function OfferSection3() {
  return (
    <div>
      <div className="grid grid-cols-12" dir="rtl">
        <div className="flex items-center md:py-0 col-span-12 md:col-span-6">
          <div>
            <p className="relative font-[600] text-[#692BEF] text-[2rem]">
              علي ماذا ستحصل مقابل
              <span className="relative inline-block text-[#692BEF] md:ps-3">
                <span className="inter-text">79</span> دولار فقط
              </span>
              ؟
            </p>
            <p className="mt-3 leading-[1.7rem] text-[#212529] py-1">
              إمكانية الوصول غير المحدود إلى منصة متقن، بما في ذلك <span className="inter-text">200,000</span> كلمة شهريًا، والتحديثات المنتظمة التي ستشمل العديد من المميزات
            </p>
            <Link to='https://auth.mutqinai.com/signup'>
            <button className="bg-[#692BEF] rounded-lg py-2 mt-6 px-16 text-center text-white">اشترك الآن</button>
          </Link>
            </div>
        </div>
        <div className="flex justify-center col-span-12 md:col-span-6">
          <div className="w-full  md:mt-0 mt-12 md:ms-5">
            {features.map((feature) => (
              <div key={feature.id} className="p-5 py-3 w-full rounded-lg bg-white shadow-lg my-3">
                <div className="grid grid-cols-12 text-[#1B223C]">
                  <span className=" col-span-1  mt-3 md-mt-0 bg-[#692BEF4D] rounded-lg text-[#692BEF] text-center items-center justify-center w-[30px] h-[30px] inter-text font-[500] pt-1">{feature.id}</span>
                  <div className=' col-span-11  md:p-1  p-2'>
                    <h5 className="px-2 py-0">{feature.title}</h5>
                    <p className="text-[#1B223CCC] px-2 text-[12px] font-[400] pt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection3;
