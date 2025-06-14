import React from 'react';

const Expertise = () => {
  const expertiseData = {
    title: "Expertise",
    icon: "/assets/star.svg",
    items: [
      {
        title: "Branding",
        description:
          "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
      },
      {
        title: "UI Design",
        description:
          "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
      },
      {
        title: "UX Design",
        description:
          "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
      },
      {
        title: "Development",
        description:
          "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
      },
    ],
  };

  return (
    <div className="py-[64px] px-[10%] flex flex-col gap-16 bg-[#010208] text-white">
      {/* Title with icon */}
      <h2 className="syne-text flex gap-3 items-center font-semibold text-[40px]">
        <img src={expertiseData.icon} alt="star-icon" className="h-6 w-6" />
        {expertiseData.title}
      </h2>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
        {expertiseData.items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h3 className="syne-text font-semibold text-[24px] before:content-['▪'] before:mr-2">
              {item.title}
            </h3>
            <p className="text-[#CBCBCB] text-[15px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
