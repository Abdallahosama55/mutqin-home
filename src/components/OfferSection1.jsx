import React from 'react'
import illustration from '../assets/offerpage/cuate.png'
import line from '../assets/offerpage/Vector 771.png'
import { Link } from 'react-router-dom'

function OfferSection1() {
  return (
    <div>
      <div className='grid grid-cols-12 pt-12' dir='rtl'>
        <div className='flex items-center md:py-0 py-12 col-span-12 md:col-span-8'>
          <div className='md:w-[77%]'>
            <h3 className='text-[#692BEF] py-1'>العرض متاح لاول 100 شخص فقط</h3>
            <p className='relative font-[600] text-[#212529] text-[2.2rem]'>
              استمتع باشتراك تطوير كتابة المحتوى مدى الحياة مقابل 
              <span className='relative inline-block text-[#692BEF] md:ps-3'>
                <span className='inter-text'>79</span> دولار فقط
                <img src={line} className='absolute bottom-[-10px] w-[200px]' />
              </span>
              !
            </p>
            <p className='mt-3 leading-[1.7rem] text-[#212529] py-1'>
              هل تبحث عن أداة تجعل كتابة المحتوى أسهل وأكثر احترافية؟ تعرّف على متقن، أداة الذكاء الاصطناعي التي ستغيّر طريقة عملك! مع متقن، يمكنك كتابة المقالات، التدقيق اللغوي، إعادة الصياغة، وأكثر من 80 قسم محتوى، بالإضافة إلى المحرر الذكي.
            </p>
            <Link to='https://auth.mutqinai.com/signup'>
            <button className='bg-[#692BEF] rounded-lg py-2 mt-6 px-16 text-center text-white' >اشترك الآن</button>
            
            </Link>
          
          </div>
        </div>
        <div className='flex justify-center items-center col-span-12 md:col-span-4'>
          <img src={illustration} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default OfferSection1
