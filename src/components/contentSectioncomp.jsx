import React from 'react'
import robotics from '../assets/d1410b52fed9fd0f05d8938d35f1819e 1.png'
import { FaCircle } from "react-icons/fa";
import stepper from '../assets/steeper.png'
import PoweredSection from './PoweredSection';
import SliderSection from './SliderSection';
function ContentSectioncomp() {
  return (
    <div>
    
    <div className=' grid grid-cols-1 md:grid-cols-2  pb-0   md:pt-0   pt-4 pb-0 px-4  pt-4 pb-0 px-4 mx-auto max-w-screen-xl lg:px-24 max-w-[1100px]  justify-center  gap-4' dir="rtl">
    
    <div className=' text-[#1B223C]    '>
    <div  className=' border-[1px] border-[#1B223C]  rounded-[16px]'>
    <div className=' grid grid-cols-3 py-6 md:pb-0'>
    
    <div className=' col-span-2 ps-6'>
    
    <h3 className=' text-[20px]'>كن ملك المحتوى!</h3>
    <p  className=' text-[12px] py-4'>✓ تجربة مجانية ✓ استخدام متعدد ✓ ضمان استعادة الأموال</p>
    <p className=' text-[#797878] text-[12px]'>أنت تعطي بعض التعليمات، وسيقوم متقن بالكتابة نيابةً عنك.</p>
    </div>
    <div className=' col-span-1'>
    
        
    <img src={robotics} className=' w-[75%]'/>
    
    </div>
    
    </div>
    </div>
    <div className='  flex   mt-4 p-6 text-[#ffff] bg-[#692BEF] rounded-[16px]'>
 <div className=' col-span-1 '>
 <img src={stepper}/>
 
 </div>
 <div className=' col-span-11 '>
 <div className='ps-3 py-0 my-0'>
 
 <h3 className='font-[300] pb-2  '>الخطوة الأولى</h3>
 <p>حدد نموذج المحتوي الذي تريد استخدامه.</p>

 
 </div>

 <div className='ps-3 mt-3  md:mt-10 py-0'>
 
 <h3 className=' font-[300] pb-2  '> الخطوة الثانية</h3>
 <p>أدخل التفاصيل وشاهد سحر متقن!.</p>

 
 </div>

 <div className='ps-3 mt-2 md:mt-7 py-0'>
 
 <h3 className=' font-[300] pb-2  '>  الخطوة الثالثة</h3>
 <p>المحتوى جاهز! يمكنك تعديله أو تحديثه قبل الاستخدام.</p>

 
 </div>

 </div>


    
    </div>
    </div>

  
    <div className=' p-4 px-8 bg-[#1212120D] rounded-[15px]'>
    
    
    
    <div>
    
    <h3 className='text-[1.4rem] py-5'>أكثر من <span className="text-[#692BEF] inter-text font-[600] ">80</span> نموذج محتوي جاهز للاستخدام.</h3>

    <p className=' text-[#1B223C] text-[15px]'>
    تساعدك نماذج المحتوي الخاصة بنا على إنشاء محتوى عالي الكفاءة بسرعة وسهولة للمدونات ووسائل التواصل الاجتماعي، ومقاطع الفيديو، وتعزيز تحسين محركات البحث، وإنشاء محتوي لمختلف الأنشطة الإعلانية - كل ذلك في مكان واحد!
    
    
    </p>
    
    </div>
    

    <div className=' py-5 pb-0'>
    <div>
    <SliderSection speed={1000} />
    
    </div>
    <div>
    <SliderSection speed={2000} />
    
    </div>
    <div>
    <SliderSection speed={1500}/>
    
    </div>
    <div>
    <SliderSection speed={1000} />
    
    </div>
    
    
    
    </div>
    
    
    </div>
    </div>
    
    
    </div>
  )
}

export default ContentSectioncomp