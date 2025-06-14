
const Home = () => {
  const portfolioData = {
    heading: {
      titleParts: ['I AM A', 'FREELANCE DESIGNER', 'FROM SAN FRANCISCO'],
      avatars: ['/assets/avtar-1.svg', '/assets/avtar-2.svg'],
    },
    companies: [
      { name: 'doradesign', icon: '/assets/flash.svg' },
      { name: 'wave', icon: '/assets/wave.svg' },
      { name: 'silsila', icon: '/assets/silsila.svg' },
    ],
    description:
      'Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.',
  };

  return (
  <div className="bg-[#010208] text-white mt-0 py-0 px-6 lg:mt-32 lg:py-32 md:mt-16 md:py-16 md:px-16 lg:px-24 leading-[1.8]">


    {/* // <div className="bg-[#010208] text-white mt-32 py-32 px-6  md:py-16  md:mt-16 md:px-16 lg:px-24"> */}
      <div className="flex flex-col items-center text-center gap-16">

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-tight syne-text">
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            <span>{portfolioData.heading.titleParts[0]}</span>
            <img
              src={portfolioData.heading.avatars[0]}
              alt="avatar-1"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <span>FREELANCE</span>
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap mt-2">
            <span>DESIGNER</span>
            <img
              src={portfolioData.heading.avatars[1]}
              alt="avatar-2"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <span>FROM</span>
          </div>
          <div className="mt-2">{portfolioData.heading.titleParts[2]}</div>
        </div>

        {/* Companies + Description */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full max-w-6xl">
          {/* Companies */}
          <div className="flex items-center justify-center lg:justify-start lg:gap-24 gap-8 flex-wrap flex-1">
            {portfolioData.companies.map((company, idx) => (
              <div key={idx} className="flex items-center gap-2 text-base sm:text-lg text-[#CBCBCB]">
                <img src={company.icon} alt={`${company.name}-icon`} className="h-[24px] sm:h-[28px] w-auto" />
                {company.name === 'doradesign' && <span>{company.name}</span>}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[#CBCBCB] text-sm sm:text-base text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            {portfolioData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
