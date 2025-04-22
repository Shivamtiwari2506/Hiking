import React from 'react';

const HikingCard = ({ count, image, section, heading, description }) => {
  const isEven = parseInt(count) % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } text-white min-h-screen`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt="Hiker on Mountain"
          className="w-full h-[300px] sm:h-[400px] lg:h-screen object-cover md:hover:scale-105 hover:shadow-md transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10 lg:py-0">
        <div className="relative mb-6">
          <span className="text-[80px] sm:text-[120px] md:text-[150px] hover:opacity-55 transition-transform ease-in-out duration-300 lg:text-[180px] font-bold text-white opacity-10">
            {count}
          </span>
          <div className="absolute left-0 flex items-center gap-2">
            <div className="w-16 sm:w-20 h-[2px] bg-[#FBD784]"></div>
            <span className="tracking-widest text-[#FBD784] text-sm sm:text-base md:text-lg uppercase">
              {section}
            </span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
          {heading}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
        <button className="mt-6 text-yellow-400 font-semibold flex items-center gap-2 hover:underline text-sm cursor-pointer sm:text-base animate-bounce">
          read more
          <span className="transform translate-x-1 text-lg ">→</span>
        </button>
      </div>
    </div>
  );
};

export default HikingCard;
