import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      id: 2,
      question: "What tools and software do you use for UX design?",
      answer:
        "Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.",
    },
    {
      id: 3,
      question: "How do you measure the success of your UX designs?",
      answer:
        "Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 sm:px-10 lg:px-[10%] flex flex-col gap-8">
      <h3 className="syne-text font-semibold text-3xl sm:text-[40px] flex items-center gap-2">
        <img alt="icon" src="/assets/Star.svg" loading="lazy" width="32" height="32" />
        Frequently Asked Questions
      </h3>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`rounded-xl border border-[#444] transition-all duration-300 ${
              activeIndex === index ? "bg-[#181818]" : "bg-transparent"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
            >
              <span className="syne-text font-medium text-xl sm:text-[28px]">{faq.question}</span>
              <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-6 pt-0">
                <p className="text-[#CBCBCB] text-base sm:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
