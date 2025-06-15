import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Lead Product Designer',
      company: 'Fortknox',
      duration: 'Mar 2022 - Oct 2023',
    },
    {
      role: 'Intern Designer',
      company: 'OmniSafe',
      duration: 'Mar 2022 - Oct 2023',
    },
    {
      role: 'UI Designer',
      company: 'Doradesign',
      duration: 'Mar 2022 - Oct 2023',
    },
    {
      role: 'Frontend Developer',
      company: 'OpacityAuthor',
      duration: 'Mar 2022 - Oct 2023',
    },
  ];

  return (
    <div className="experienceContainer py-16 px-6 sm:px-10 lg:px-[10%] flex flex-col gap-8 text-white">
      {/* Section Title */}
      <h3 className="syne-text font-semibold text-[32px] sm:text-[40px] flex items-center gap-2">
        <img alt="star-icon" src="/assets/star.svg" loading="lazy" width="32" height="32" />
        Experience
      </h3>

      {/* Experience List */}
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/50 py-4 gap-4"
        >
          <h4 className="syne-text font-medium text-2xl sm:text-[32px]">{exp.role}</h4>
          <div className="flex flex-col text-left sm:text-right">
            <h5 className="syne-text font-semibold text-lg sm:text-2xl">{exp.company}</h5>
            <p className="text-sm sm:text-base text-[#CBCBCB]">{exp.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
