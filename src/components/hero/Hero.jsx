import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {FaFacebook, FaHandshake, FaLinkedinIn} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Nischal_CV from "../../assets/Nischal_Acharya_CV.pdf";


const Hero = () => {

  const openLink = (url) => {
    try {
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error opening link:", error);
    }
  };
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div
          className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
                data-aos="fade-up"
                className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Nischal <span className="text-violet-700">Acharya</span>
            </h2>
            <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Front-End Developer",
                  2000,
                  "Back-End Developer",
                  2000,
                  "Wordpress Developer",
                  2000,
                  "Freelancer",
                ]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                className="text-violet-700 text-4xl font-bold sm:text-3xl"
            />
            <p
                data-aos="fade-up"
                className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              I'm Nischal Acharya,
              Front-End Developer & Back-End Developer
              from Gauradaha-Jhapa,Nepal.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
                href="https://www.linkedin.com/in/nischal-acharya101/"
                className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-violet-700 flex items-center"
                target="_blank"
            >
              <FaHandshake className="mr-2"/> <span>Hire Me</span>
            </a>
            <a
                href={Nischal_CV}
                className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-violet-700"
                download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload/>
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" flex gap-5"
            >
              <li>
                <button onClick={() => openLink("https://github.com/NischalAcharya060")}>
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"/>
                </button>
              </li>
              <li>
                <button onClick={() => openLink("https://www.linkedin.com/in/nischal-acharya101/")}>
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"/>
                </button>
              </li>
              <li>
                <button onClick={() => openLink("https://www.instagram.com/its_nischalacharya/")}>
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"/>
                </button>
              </li>
              <li>
                <button onClick={() => openLink("https://www.facebook.com/Nischal.Acharya.58760")}>
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"/>
                </button>
              </li>
              <li>
                <button onClick={() => openLink("https://twitter.com/Nischal79783380")}>
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div
              className="relative h-4/5 md:h-3/4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-md overflow-hidden md:order-2">
            <img
                data-aos="fade-right"
                className="w-full h-full object-cover rounded-md shadow-md filter brightness-110 contrast-125"
                src="https://i.postimg.cc/hvzjr5hT/IMG-1014.jpg"
                alt="Nischal Acharya Portfolio Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
