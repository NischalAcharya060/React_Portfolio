import React from "react";
import {AiFillFileText} from "react-icons/ai";
import {FaBriefcase, FaGraduationCap} from "react-icons/all.js";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl flex items-center">
          Resume <AiFillFileText className="ml-2" />
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-violet-500 flex items-center">
              <FaBriefcase className="mr-2" />
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-violet-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full-stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Shangrila Microsystem Pvt Ltd (Intership)
                </span>
                <span className=" text-[.9rem] font-semibold text-violet-500 sm:text-base">
                  June 2023 - September 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my internship at Shangrila Microsystem Pvt Ltd, I've gained practical experience as a Full-stack Developer. I've worked with Laravel and Vue.js to develop user-friendly web applications. I've contributed to both front-end and back-end tasks, enhancing my skills in modern web development technologies.

                  My time here has exposed me to real-world projects, taught me about collaboration, and given me insights into agile development practices. I've enjoyed learning and contributing, and I'm excited to continue my journey in web development.
                </p>
              </div>
            </div>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            <br className="mobile-hide"/>
            {/*<div className="relative">*/}
            {/*  /!* design *!/*/}
            {/*  <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">*/}
            {/*    <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>*/}
            {/*    <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>*/}
            {/*    <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>*/}
            {/*  </div>*/}
            {/*  /!* design *!/*/}
            {/*  <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-violet-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">*/}
            {/*    <h1 className="text-[1.4rem] font-semibold sm:text-xl">*/}
            {/*      VOLUNTEERING EXPERIENCE*/}
            {/*    </h1>*/}
            {/*    <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">*/}
            {/*      Aarambha Foundation Jhapa*/}
            {/*    </span>*/}
            {/*    <span className=" text-[.9rem] font-semibold text-violet-500 sm:text-base">*/}
            {/*      June 2022 - Present*/}
            {/*    </span>*/}
            {/*    <p className=" text-[.9rem] text-justify break-words text-gray-500">*/}
            {/*      I have been actively involved in volunteering with the Aarambha Foundation in Jhapa since June 2022. As a dedicated volunteer, I've had the privilege to contribute to various community initiatives aimed at improving education, healthcare, and social well-being.*/}

            {/*      My role has allowed me to collaborate with a diverse team of individuals who share a passion for creating positive change. Through my volunteering experiences, I've developed valuable teamwork, communication, and leadership skills. I'm proud to be part of an organization that is committed to making a difference in our community.*/}

            {/*      Whether it's organizing events, leading workshops, or participating in outreach programs, I find immense satisfaction in contributing to causes that align with my values. I look forward to continuing my journey as a volunteer and making a lasting impact on the lives of others.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </fieldset>
        </div>
        {/*Education*/}
        <div className="right flex-1 flex items-center justify-center">
          <fieldset data-aos="zoom-in" className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-violet-500 flex items-center">
              <FaGraduationCap className="mr-2" />
              Education
            </legend>

            {/* First Education Entry */}
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-violet-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BSc (Hons) Computing                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  London Metropolitan University
                </span>
                <span className=" text-[.9rem] font-semibold text-violet-500 sm:text-base">
                  February 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Pursuing a BSc (Hons) in Computing at London Metropolitan University. My studies have equipped me with a solid foundation in various areas of computer science. From algorithms to software engineering principles, I've developed a deep understanding of the field.

                  I've had the opportunity to work on practical projects and collaborate with fellow students, enhancing my problem-solving skills and critical thinking. I'm excited to continue expanding my knowledge and applying it to real-world challenges in the tech industry.
                </p>
              </div>
            </div>
            <br/>
            <br/>
            {/* Second Education Entry */}
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 border-2 border-violet-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Slc(Management)                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
Mount Everest English secondary School        </span>
                <span className="text-[.9rem] font-semibold text-violet-500 sm:text-base">
          March 2019 - December 2021
        </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  During this transformative period, I navigated the halls of knowledge, seizing every opportunity to learn and grow. The Mount Everest English Secondary School provided the nurturing environment for my educational pursuits in management. From March 2019 to December 2021, I immersed myself in a wealth of knowledge, honing my skills and gaining invaluable experiences. This chapter marked a significant step towards my journey of personal and professional development.
                </p>
              </div>
            </div>
            <br/>
            <br/>
            {/* Third Education Entry */}
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-violet-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 border-2 border-violet-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  SEE                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
          Mount Everest English secondary School
        </span>
                <span className="text-[.9rem] font-semibold text-violet-500 sm:text-base">
          January 2009 - December 2019
        </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  My academic journey took a significant stride during the years spent at the Mount Everest English Secondary School. From January 2009 to December 2019, I was immersed in a world of learning, discovery, and personal growth. Through every lesson and experience, I honed my skills and nurtured my intellectual curiosity. The institution provided the fertile ground for my development, and I embraced each day with a passion for knowledge and a thirst for excellence.
                </p>
              </div>
            </div>

          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
