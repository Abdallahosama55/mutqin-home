import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'intersection-observer'; // import polyfill

const ForgetComp = ({ image, pragraph, title, header, button, num_key, img_src }) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isIntersecting]);

  return (
    <div>
      <div className="w-full pt-1 mt-2 md:grid md:grid-cols-10">
        <div className={`mb-5 flex flex-col lg:py-2 text-start md:col-span-6 ${num_key === 2 ? "order-1" : ""}`} dir={num_key === 2 ? 'ltr' : 'rtl'}>
          <div className={` ${num_key === 2 ? "md:mx-12" : "md:ms-2 ms-0"} md:text-[16px] text-[12px] max-w-[150px] md:max-w-[175px] md:py-2 py-2 text-center pb-0 sm:my-0 bg-[#5225CE] md:h-[39px] h-[30px] text-white rounded-[10px]`}>
            {header}
          </div>
          <div>
            <div className={`md:me-16`}>
              <h1 className="py-6 pb-7 md:pr-4 text-2xl font-bold" dir="rtl">{title}</h1>
              <div className="list-disc md:ps-4 w-full grid grid-cols-12 my-6" dir="rtl">
                {pragraph.map((item, index) => (
                  <div key={index} className={`items-center flex text-[#5225CE] pb-10 md:pb-12 text-[10px] col-span-6 text-[16px] font-[400] md:text-[16px]`}>
                    <img src={img_src[index]} alt={`icon-${index}`} className="w-[30px] md:w-[40px]" />
                    <span className="px-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="https://auth.mutqinai.com/signup"
              className="md:mx-12 text-center md:max-w-[175px] max-w-[150px] md:mr-3 sm:my-0 bg-[#8452EF] hover:bg-[#7451d4] md:px-8 px-4 md:py-2 py-1 text-white rounded-[10px]">
              جرب الآن مجاناً
            </Link>
          </div>
        </div>
        <div className="sm:mt-0 md:col-span-4">
          <video
            ref={videoRef}
            style={{
              width: '100%',
              height: '100%',
              border: "9px solid #8452EF",
              borderRadius: "10px",
              objectFit: 'cover',
            }}
            muted={true}
            playsInline={true}
            loop={true}
          >
            <source src={image} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ForgetComp;
