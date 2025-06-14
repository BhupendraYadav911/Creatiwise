import React from 'react';

const Footer = () => {
  return (
    <div className="footerContainer pt-28 pb-8 px-6 sm:px-10 lg:px-[10%] flex flex-col gap-8 text-white">
      {/* Heading + Email */}
      <div className="flex flex-col gap-6 items-center text-center">
        <h1 className="syne-text text-4xl sm:text-5xl lg:text-[64px] font-extrabold">LET’S TALK!</h1>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          <p className="font-normal text-base sm:text-lg">Bhupendrayadav911@gmail.com</p>
          <img
            alt="footer-arrow"
            loading="lazy"
            width="16"
            height="16"
            className="w-4 h-4 object-cover"
            src="/assets/up-arrow.svg"
          />
        </div>
      </div>

      {/* Copyright + Social */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-6 sm:gap-0">
        <div className="font-normal text-sm text-[#CBCBCB]">
          © Bhupendra Yadav - {new Date().getFullYear()}
        </div>

        <ul className="syne-text flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-[#CBCBCB]">
          <li>
            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://behance.net/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
