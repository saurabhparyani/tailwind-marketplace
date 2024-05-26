import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

interface SocialLink {
  path: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    path: "https://github.com/saurabhparyani/tailwind-marketplace",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/saurabhparyani/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.saurabhparyani.dev/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-7 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img
              className="h-14 w-72"
              src="/tailwind-marketplace.png"
              alt="tailwind marketplace"
            />
            <p className="text-[16px] leading-7 font-[400] text-textColor ml-9">
              This website is not affiliated with TailwindCSS or TailwindLabs.
            </p>
            <p className="text-[16px] leading-7 font-[400] text-textColor ml-9">
              Copyright © {currentYear} Tailwind Marketplace. Developed by
              Saurabh Paryani. All rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-4 ml-9">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.path}
                  target="_blank"
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-sky-600 hover:border-2"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
