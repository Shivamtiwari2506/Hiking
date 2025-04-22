import React from "react";
import img1 from "../assets/images/HG.png";
import img2 from "../assets/images/MG.png";
import img3 from "../assets/images/VG.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import downIcon from "../assets/icons/arrow_downward_24px.png";
import HikingCard from "../components/HikingCard";
import card_image_1 from '../assets/images/card_image_1.png'
import card_image_2 from '../assets/images/card_image_2.png'
import card_image_3 from '../assets/images/card_image_3.png'


const cardData = [
  {count:"01",image:card_image_1,section:"GEt Started",heading:"What level of  hiker are you?", description:"Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "},
  {count:"02",image:card_image_2,section:"Hiking Essentials",heading:"Picking the right Hiking Gear!", description:" The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."},
  {count:"03",image:card_image_3,section:"where you go is the key",heading:"Understand Your Map & Timing", description:"To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."}

]

const LandingPage = () => {
  return (
    <div className="w-full bg-[#0B1D26]">
      <div className="relative w-full min-h-screen text-white">
        <div className="absolute top-0 left-0 w-full h-full z-0 "> 
          <img
            src={img1}
            alt="Image 1"
            className="absolute top-0 left-0 w-full object-cover contrast-[.65]"
          />
          <img
            src={img2}
            alt="Image 2"
            className="absolute md:top-[330px] top-[180px] left-0 w-full object-cover"
          />
          <img
            src={img3}
            alt="Image 3"
            className="absolute md:top-[560px] top-[290px] left-0 w-full object-cover lg:h-full "
          />
           
        </div>
       
        <div className="relative z-10 md:pt-[280px] pt-[400px] md:pb-[150px] px-6">
          <div className="flex justify-between items-start flex-wrap gap-6">
            <div>
              <ul className="flex flex-col items-center font-semibold">
                <li className="rotate-90">Follow us</li>
                <li>
                  <a href="https://www.instagram.com" target="_blank"> <img src={instagram} alt="Instagram" className="my-8" /></a>
                </li>
                <li>
                  <a href="https://www.x.com" target="_blank"> <img src={twitter} alt="Twitter" /></a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-8 max-w-2xl text-left pl-10">
              <div className="flex items-center gap-4">
                <span className="w-[72px] h-[2px] bg-[#FBD784] block"></span>
                <p className="text-[#FBD784] text-lg tracking-tight">A HIKING GUIDE</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold">
                Be Prepared For The <br /> Mountains And Beyond!
              </h1>
              <div className="flex gap-4 items-center font-serif brightness-125">
                <span>Scroll Down</span>
                <span className="animate-bounce ">
                  <img src={downIcon} alt="Scroll Down Icon" className="w-5" />
                </span>
              </div>
            </div>

            {/* Progress Sidebar */}
            <div >
              <ul className="flex items-center gap-4">
                <li className="flex flex-col text-right space-y-4">
                  <span>Start</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </li>
                <li>
                  <progress
                    className="w-32 h-1 rotate-90"
                    value="40"
                    max="100"
                  ></progress>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-[#0B1D26] z-20"></div> */}
      </div>
      
      <section className="relative z-10 py-20 px-6">
        <div className="flex flex-col space-y-32">
          {cardData.map((item, index) => (
            <HikingCard
              key={index}
              count={item.count}
              image={item.image}
              section={item.section}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
