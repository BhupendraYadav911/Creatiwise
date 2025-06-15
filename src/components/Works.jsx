import React from 'react';

const Works = () => {
  const worksData = {
    title: 'Works',
    icon: '/assets/star.svg',
    viewAllText: 'View All',
    items: [
      {
        title: 'Analysis Application',
        description:
          'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
        tags: ['FIGMA', 'UX'],
        image: '/assets/image-1.svg',
      },
      {
        title: 'Fortknox Application',
        description:
          'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
        tags: ['MOBILE', 'WEB'],
        image: '/assets/image-2.svg',
      },
      {
        title: 'Zenocide Application',
        description:
          'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
        tags: ['APP', 'WEB'],
        image: '/assets/image-3.svg',
      },
    ],
  };

  return (
    <div className="worksContainer flex flex-col gap-12 py-16 px-6 sm:px-10 lg:px-[10%]">
      {/* Header */}
      <div className="syne-text flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="flex items-center gap-2 text-3xl sm:text-4xl font-semibold">
          <img
            alt="icon"
            src={worksData.icon}
            loading="lazy"
            width="32"
            height="32"
          />
          {worksData.title}
        </h2>
        <div className="underline underline-offset-4 cursor-pointer text-white text-sm sm:text-base">
          {worksData.viewAllText}
        </div>
      </div>

      {/* Work Items */}
      {worksData.items.map((work, index) => (
        <div
          key={index}
          className="workBox rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 bg-white/20 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-2xl h-64 sm:h-96">
            <img
              alt={work.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
              src={work.image}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between gap-6 text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {work.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="syne-text border border-white text-xs py-1.5 px-5 rounded-full text-white"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="syne-text font-semibold text-sm bg-white text-black py-3 px-6 rounded-full w-fit cursor-pointer shadow-md hover:bg-gray-200 transition">
              View Case Study
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
