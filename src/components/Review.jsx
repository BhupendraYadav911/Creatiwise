import React, { useRef } from 'react';
import Slider from 'react-slick';

const Reviews = () => {
  const sliderRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Floyd Miles',
      company: 'eBay',
      text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
      profileImage: '/assets/userProfile.svg',
      quoteImage: '/assets/quote.svg',
    },
    {
      id: 2,
      name: 'Jane Doe',
      company: 'Company XYZ',
      text: 'This tool has transformed my job search experience!',
      profileImage: '/assets/userProfile.svg',
      quoteImage: '/assets/quote.svg',
    },
    {
      id: 3,
      name: 'John Smith',
      company: 'Tech Corp',
      text: 'I highly recommend this service to anyone looking to improve their resume.',
      profileImage: '/assets/userProfile.svg',
      quoteImage: '/assets/quote.svg',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="reviewContainer bg-[#010208] text-white py-16 px-6 sm:px-10 lg:px-[10%] flex flex-col gap-12">
      {/* Section Heading */}
      <h2 className="syne-text font-semibold text-3xl sm:text-[40px] flex items-center gap-3">
        <img src="/assets/star.svg" alt="star" width={32} height={32} />
        What they say
      </h2>

      {/* Slider Section */}
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="py-8">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Profile */}
              <div className="flex items-center gap-4 min-w-[180px]">
                <img
                  src={review.profileImage}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full w-[64px] h-[64px]"
                />
                <div>
                  <h5 className="syne-text font-semibold text-xl sm:text-2xl">{review.name}</h5>
                  <p className="text-[#CBCBCB] text-sm sm:text-base">{review.company}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative w-full">
                <img
                  src={review.quoteImage}
                  alt="quote"
                  className="absolute -top-8 sm:-top-10 left-0 w-[64px] sm:w-[80px] md:w-[112px] z-0 opacity-80"
                />
                <p className="syne-text text-lg sm:text-2xl md:text-[32px] font-medium relative z-10 leading-snug mt-8 sm:mt-0">
                  {review.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-4">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center rotate-180 hover:bg-[#CBCBCB] transition"
        >
          <img src="/assets/right-arrow.svg" alt="prev" width={12} height={8} />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#CBCBCB] transition"
        >
          <img src="/assets/right-arrow.svg" alt="next" width={12} height={8} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
