import React from 'react';
import idea from '../assets/offerpage/idea.png';
import quality from '../assets/offerpage/Quality.png';
import creative from '../assets/offerpage/Artificial Intelligent.png';
import seo from '../assets/offerpage/Seo.png';
import correct from '../assets/offerpage/correct.png';
import enhance from '../assets/offerpage/enhance.png';
import language from '../assets/offerpage/language.png';
import int from '../assets/offerpage/art.png';
import reply from '../assets/offerpage/Fastest Delivery.png'
import spcial from '../assets/offerpage/streamline_collaborations-idea (1).png'
import help  from '../assets/offerpage/carbon_improve-relevance (1).png'
import what from '../assets/offerpage/arcticons_mondly-languages (1).png'
import web from '../assets/offerpage/Website.png'
import eco from '../assets/offerpage/E Commerce.png'
import email  from '../assets/offerpage/1.png'
import social   from '../assets/offerpage/Layer 41.png'
const sections = [
  {
    backgroundColor: '#CBE3FA80',
    title: 'أداة كتابة المقالات الاحترافية',
    description: 'اكتشف القوة الحقيقية في كتابة المقالات مع أداة متقن الاحترافية. صممت لتساعدك في إنتاج محتوى عالي الجودة بسهولة وسرعة.',
    features: [
      { img: idea, text: 'أفكار مبتكرة فورية' },
      { img: quality, text: 'نصوص بجودة عالية' },
      { img: creative, text: 'تحرير ذكي متكامل' },
      { img: seo, text: 'متوافق مع SEO' }
    ]
  },
  {
    backgroundColor: '#FFEBFD80',
    title: '   أداة التدقيق اللغوي والنحوي',
    description: 'ارتقِ بجودة كتاباتك مع أداة التدقيق اللغوي والنحوي من متقن. تصحيح فوري وتحليل متقدم يضمن خلو محتواك من الأخطاء.',
    features: [
      { img: correct, text: 'تصحيح لغوي فوري '},
      { img: enhance, text: 'تحسين جودة الكتابة.' },
      { img: language, text: 'دعم متعدد اللغات.' },
      { img: int, text: 'توصيات تصحيح ذكية.' }
    ]
  },
  {
    backgroundColor: '#DCFFEF80',
    title: 'متقن شات',
    description: 'تفاعل بكفاءة وسرعة مع متقن شات، مساعد الذكاء الاصطناعي الذكي. اجعل تجربتك أكثر سهولة وتفاعلية.',
    features: [
      { img: reply, text: 'إجابات سريعة ودقيقة.' },
      { img: spcial, text: 'تخصيص الردود الذكية.' },
      { img: help, text: ' مساعدة في المهام. ' },
      { img: what, text: ' استفسارات متعددة اللغات. ' }
    ]
  },
  {
    backgroundColor: '#FFEDEB80',
    title: 'أكثر من ٨٠ قسم للمحتوى',
    description: 'نقدم لكم في متقن مجموعة واسعة ومتنوعة من الأقسام لتلبية كافة احتياجات المحتوى الخاصة بكم، من الإعلانات والتسويق إلى الفيديوهات الترويجية.',
    features: [
      { img: web, text: 'محتوى مواقع إلكترونية.' },
      { img: eco, text: 'حلول تجارة إلكترونية.' },
      { img: email, text: 'إيميلات ورسائل محترفة.' },
      { img: social, text: ' محتوى التواصل الاجتماعي. ' }
    ]
  },
];

function Offersection2() {
  return (
    <div className='py-12' dir='rtl'>
      <header className='flex justify-center w-full'>
        <div>
          <h5 className='text-center py-3 font-[400] text-[#1B223C] text-[28px]'>لماذا متقن؟</h5>
          <p className='text-[#797878] font-light text-center md:px-12'>
            نحن في متقن نقدم مجموعة من الأدوات المبتكرة التي ستغير طريقة كتابة المحتوى للأفضل.
          </p>
        </div>
      </header>

      <main>
        <div className='py-12 grid grid-cols-12 gap-4' dir='rtl'>
          {sections.map((section, index) => (
            <div key={index} className={`p-4 pb-0 px-6 md:col-span-6 col-span-12 rounded`} style={{ backgroundColor: section.backgroundColor }}>
              <h5 className='py-5 text-[19px]'>{section.title}</h5>
              <p className='text-[#797878] text-[14px]'>{section.description}</p>
              <div className='gap-4 py-5 pt-12 justify-center grid grid-cols-12'>
                {section.features.map((feature, idx) => (
                  <div key={idx} className='mb-5 col-span-6 flex items-center'>
                    <img src={feature.img} className='w-[20px]' alt={feature.text} />
                    <span className='px-2 md:text-[15px] text-[10px]'>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Offersection2;
