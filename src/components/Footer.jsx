import React from "react";
import gmailIcon from "../assets/email-icon.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex flex-col items-center justify-center px-5 py-10 md:flex-row md:justify-between md:py-16 lg:px-20 xl:px-28 2xl:px-40">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-[#111111] font-bold text-lg md:text-xl lg:text-2xl">
            Follow Me
          </h2>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com/in/satya0101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="" className="w-[30px] md:w-[40px]" />
            </a>
            <a
              href="https://github.com/SatyaProgramming"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="" className="w-[60px] md:w-[50px]" />
            </a>
            <a
              href="https://www.instagram.com/about_satya.01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt=""
                className="w-[30px] md:w-[40px]"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="text-[#111111] font-bold text-lg md:text-xl lg:text-2xl">
            Contact Me
          </h2>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div style={{ color: "#555555" }}>satyaranjan.swain.dev@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="bg-[#333333] text-white py-5 md:py-7 lg:py-10 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-sm md:text-base lg:text-lg">
            © {new Date().getFullYear()} Satya | All Rights Reserved
          </div>
          <div className="text-sm md:text-base lg:text-lg">
            Designed and Built with ❤️ by Satyaranjan Swain
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
