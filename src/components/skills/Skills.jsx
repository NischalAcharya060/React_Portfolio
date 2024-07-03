import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiVuedotjs,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import {FaLaravel, FaPhp, FaReact, FaTools} from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl flex items-center">
            My Skills <FaTools className="ml-2" />
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
                data-aos="zoom-in"
                className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5/>} name="HTML" value={90} color="#e34c26" iconColor="#e34c26"/>
                <ProgressBar logo={<IoLogoCss3/>} name="CSS" value={90} color="#2965f1" iconColor="#2965f1"/>
                <ProgressBar logo={<SiJavascript/>} name="JavaScript" value={50} color="#f0db4f" iconColor="#f0db4f"/>
                <ProgressBar logo={<FaPhp/>} name="PHP" value={30} color="#818ceb" iconColor="#818ceb"/>
                <ProgressBar logo={<FaReact/>} name="React JS" value={20} color="#61DBFB" iconColor="#61DBFB"/>
                <ProgressBar logo={<FaLaravel/>} name="Laravel" value={20} color="#fb503b" iconColor="#fb503b"/>
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                  logo={<IoLogoNodejs style={{ color: '#83CD29' }}/>}
                  black={"white"}
                  white={"black"}
                  skill={"Node Js"}
              />
              <SkillBox
                  logo={<SiMongodb style={{ color: '#4DB33D'}}/>}
                  black={"white"}
                  white={"black"}
                  skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                  logo={<SiVuedotjs style={{ color: '#34495e' }}/>}
                black={"black"}
                white={"white"}
                skill={"Vue Js"}
              />
              <SkillBox
                logo={<SiFlutter style={{ color: ' #42A5F5' }}/>}
                black={"black"}
                white={"white"}
                skill={"Flutter"}
              />
            </div>
          </div>
        </div>

        {/* icons */}
         <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://www.agilesparks.com/wp-content/uploads/2022/08/Java_logo_icon.png"
            alt="Java Logo"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
            alt="Python Logo"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
            alt="React_Native Logo"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            alt="Sass Logo"
            />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            alt="Git Logo"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
            alt="C++ Logo"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png" alt="JS Logo"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png" alt="Node Js Logo"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="Mongo DB Logo"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
