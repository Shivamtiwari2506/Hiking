import { React, useState } from "react";
import { useCard } from "../context/getContext";
import trakkingimage1 from "../assets/images/trakkingimage1.jpg";
import trakkingimage2 from "../assets/images/trakkingimage2.jpg";
import trakkingimage3 from "../assets/images/trakkingimage3.jpg";
import trakkingimage4 from "../assets/images/trakkingimage4.jpg";

const DetailPage = () => {
  const { cardDetail } = useCard();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    
  };

  console.log(cardDetail);
  return (
    <div data-aos="fade-up">
      <header data-aos="fade-up" className="relative md:mb-10 ">
        <section className="w-auto h-auto">
          <img
            src={cardDetail.image}
            alt=""
            className="w-full md:h-screen object-contain object-fit"
          />
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0B1D26] z-20"></div>
        </section>

        <div className="absolute md:top-1/2 top-2/4  left-1/2 -translate-y-1/2 -translate-x-1/2 flex-col space-y-3 text-justify">
          <div className="flex items-center md:gap-3">
            <div className="w-16 sm:w-20 h-[2px] bg-[#FBD784]"></div>
            <h1 className="text-4xl text-[#FBD784] uppercase font-bold text-center">
              {cardDetail.section}
            </h1>
          </div>
          <p className="text-3xl font-semibold">{cardDetail.heading}</p>
          <div className="opacity-80 font-medium  line-clamp-6 md:line-clamp-none">{cardDetail.description}</div>
        </div>
      </header>

      <main className="flex-col space-y-4">
        <div data-aos="fade-up" className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden p-4">
          <div className="md:w-1/2 relative">
          <div className="absolute inset-0 h-30 gradient-overlay pointer-events-none"></div>
            <img
              src={trakkingimage1}
              alt="Card Visual"
              className={`w-full h-[400px] ${isExpanded?"h-full":""} object-cover opacity-95 hover:scale-105 transition-transform duration-300 ease-in-out`}
            />
          </div>

          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl font-bold mb-2 text-[#FBD784]">
              {cardDetail.heading}
            </h2>
            <p 
              className={`mb-4 font-semibold opacity-80 hover:opacity-100 ${
                !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              Hiking is one of the most rewarding outdoor activities that
              combines physical exercise, mental relaxation, and an opportunity
              to connect with nature. It appeals to people of all ages and
              fitness levels, offering a wide range of trails that vary in
              difficulty, length, and scenery. From short nature walks in local
              parks to multi-day treks across rugged mountains, hiking invites
              individuals to slow down and appreciate the world around them. One
              of the greatest benefits of hiking is the positive impact it has
              on physical health. It strengthens the muscles, improves
              cardiovascular endurance, and helps with weight management. Unlike
              high-impact sports, hiking is gentle on the joints, making it a
              sustainable form of exercise for many. But the advantages go
              beyond physical fitness — hiking is also known to improve mental
              health. The combination of natural surroundings, fresh air, and
              the rhythm of walking can reduce stress, clear the mind, and
              enhance overall well-being. Another beautiful aspect of hiking is
              the sense of discovery it brings. Hikers often encounter stunning
              views, unique wildlife, hidden waterfalls, and peaceful
              environments that are inaccessible by car. This connection to
              nature fosters mindfulness and a deeper appreciation for the
              environment. In today’s fast-paced, screen-dominated world, hiking
              offers a much-needed escape. It encourages people to unplug from
              technology and immerse themselves in the present moment. Whether
              done alone for introspection or with others for shared adventure,
              hiking provides a powerful and enriching experience that
              rejuvenates both the body and mind.
            </p>
            <button
              onClick={handleToggle}
              className="mt-auto px-4 py-2 bg-[#FBD784] text-white text-xl font-bold rounded transition cursor-pointer"
            >
              <span className="animate-pulse opacity-80 hover:opacity-100">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
            </button>
          </div>
        </div>
        
        <div data-aos="fade-up" className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden p-4">
          <div className="md:w-1/2 relative">
         
            <img
              src={trakkingimage2}
              alt="Card Visual"
              className={`w-full h-[400px] ${isExpanded?"h-full":""} object-bottom object-cover opacity-95 hover:scale-105 transition-transform duration-300 ease-in-out`}
            />
           
          </div>

          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl font-bold mb-2 text-[#FBD784]">
            {cardDetail.heading}
            </h2>
            <p
              className={`mb-4 font-semibold opacity-80 hover:opacity-100 ${
                !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              Hiking is one of the most rewarding outdoor activities that
              combines physical exercise, mental relaxation, and an opportunity
              to connect with nature. It appeals to people of all ages and
              fitness levels, offering a wide range of trails that vary in
              difficulty, length, and scenery. From short nature walks in local
              parks to multi-day treks across rugged mountains, hiking invites
              individuals to slow down and appreciate the world around them. One
              of the greatest benefits of hiking is the positive impact it has
              on physical health. It strengthens the muscles, improves
              cardiovascular endurance, and helps with weight management. Unlike
              high-impact sports, hiking is gentle on the joints, making it a
              sustainable form of exercise for many. But the advantages go
              beyond physical fitness — hiking is also known to improve mental
              health. The combination of natural surroundings, fresh air, and
              the rhythm of walking can reduce stress, clear the mind, and
              enhance overall well-being. Another beautiful aspect of hiking is
              the sense of discovery it brings. Hikers often encounter stunning
              views, unique wildlife, hidden waterfalls, and peaceful
              environments that are inaccessible by car. This connection to
              nature fosters mindfulness and a deeper appreciation for the
              environment. In today’s fast-paced, screen-dominated world, hiking
              offers a much-needed escape. It encourages people to unplug from
              technology and immerse themselves in the present moment. Whether
              done alone for introspection or with others for shared adventure,
              hiking provides a powerful and enriching experience that
              rejuvenates both the body and mind.
            </p>
            <button
              onClick={handleToggle}
              className="mt-auto px-4 py-2 bg-[#FBD784] text-white text-xl font-bold rounded transition cursor-pointer"
            >
              <span className="animate-pulse opacity-80 hover:opacity-100">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden p-4">
          <div className="md:w-1/2 relative">
          
            <img
              src={trakkingimage3}
              alt="Card Visual"
              className={`w-full h-[400px] ${isExpanded?"h-full":""} object-cover opacity-95 hover:scale-105 transition-transform duration-300 ease-in-out`}
            />
           
          </div>

          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl font-bold mb-2 text-[#FBD784]">
            {cardDetail.heading}
            </h2>
            <p
              className={`mb-4 font-semibold opacity-80 hover:opacity-100 ${
                !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              Hiking is one of the most rewarding outdoor activities that
              combines physical exercise, mental relaxation, and an opportunity
              to connect with nature. It appeals to people of all ages and
              fitness levels, offering a wide range of trails that vary in
              difficulty, length, and scenery. From short nature walks in local
              parks to multi-day treks across rugged mountains, hiking invites
              individuals to slow down and appreciate the world around them. One
              of the greatest benefits of hiking is the positive impact it has
              on physical health. It strengthens the muscles, improves
              cardiovascular endurance, and helps with weight management. Unlike
              high-impact sports, hiking is gentle on the joints, making it a
              sustainable form of exercise for many. But the advantages go
              beyond physical fitness — hiking is also known to improve mental
              health. The combination of natural surroundings, fresh air, and
              the rhythm of walking can reduce stress, clear the mind, and
              enhance overall well-being. Another beautiful aspect of hiking is
              the sense of discovery it brings. Hikers often encounter stunning
              views, unique wildlife, hidden waterfalls, and peaceful
              environments that are inaccessible by car. This connection to
              nature fosters mindfulness and a deeper appreciation for the
              environment. In today’s fast-paced, screen-dominated world, hiking
              offers a much-needed escape. It encourages people to unplug from
              technology and immerse themselves in the present moment. Whether
              done alone for introspection or with others for shared adventure,
              hiking provides a powerful and enriching experience that
              rejuvenates both the body and mind.
            </p>
            <button
              onClick={handleToggle}
              className="mt-auto px-4 py-2 bg-[#FBD784] text-white text-xl font-bold rounded transition cursor-pointer"
            >
              <span className="animate-pulse opacity-80 hover:opacity-100">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden p-4">
          <div className="md:w-1/2 relative">
          <div className="absolute inset-0 h-30 gradient-overlay pointer-events-none"></div>
            <img
              src={trakkingimage4}
              alt="Card Visual"
              className={`w-full h-[400px] ${isExpanded?"h-full":""} object-cover opacity-95 hover:scale-105 transition-transform duration-300 ease-in-out`}
            />
           
          </div>

          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl font-bold mb-2 text-[#FBD784]">
            {cardDetail.heading}
            </h2>
            <p
              className={`mb-4 font-semibold opacity-80 hover:opacity-100 ${
                !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              Hiking is one of the most rewarding outdoor activities that
              combines physical exercise, mental relaxation, and an opportunity
              to connect with nature. It appeals to people of all ages and
              fitness levels, offering a wide range of trails that vary in
              difficulty, length, and scenery. From short nature walks in local
              parks to multi-day treks across rugged mountains, hiking invites
              individuals to slow down and appreciate the world around them. One
              of the greatest benefits of hiking is the positive impact it has
              on physical health. It strengthens the muscles, improves
              cardiovascular endurance, and helps with weight management. Unlike
              high-impact sports, hiking is gentle on the joints, making it a
              sustainable form of exercise for many. But the advantages go
              beyond physical fitness — hiking is also known to improve mental
              health. The combination of natural surroundings, fresh air, and
              the rhythm of walking can reduce stress, clear the mind, and
              enhance overall well-being. Another beautiful aspect of hiking is
              the sense of discovery it brings. Hikers often encounter stunning
              views, unique wildlife, hidden waterfalls, and peaceful
              environments that are inaccessible by car. This connection to
              nature fosters mindfulness and a deeper appreciation for the
              environment. In today’s fast-paced, screen-dominated world, hiking
              offers a much-needed escape. It encourages people to unplug from
              technology and immerse themselves in the present moment. Whether
              done alone for introspection or with others for shared adventure,
              hiking provides a powerful and enriching experience that
              rejuvenates both the body and mind.
            </p>
            <button
              onClick={handleToggle}
              className="mt-auto px-4 py-2 bg-[#FBD784] text-white text-xl font-bold rounded transition cursor-pointer"
            >
              <span className="animate-pulse opacity-80 hover:opacity-100">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DetailPage;
