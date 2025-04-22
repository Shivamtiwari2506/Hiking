import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 bg-[#0B1D26] text-white">
      <div className=" mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between md:jus gap-10 md:gap-96 ">
          {/* Logo and Description */}
          <div className="flex-1">
            <h1 className="text-[#FBD784] text-3xl">MNTN</h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              Get out there & discover your next <br />
              slope, mountain & destination!
            </p>
            <p className="mt-12 text-xs opacity-50">
              © 2023 MNTN, Inc. Terms & Privacy
            </p>
          </div>

          {/* Blog Links */}
          <div className="flex-1">
            <h2 className="text-[#FBD784] text-xl sm:text-2xl">
              More on The Blog
            </h2>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              <li>About MNTN</li>
              <li>Contributors & Writers</li>
              <li>Write For Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* MNTN Links */}
          <div className="flex-1">
            <h2 className="text-[#FBD784] text-xl sm:text-2xl">
              More on MNTN
            </h2>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              <li>The Team</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
