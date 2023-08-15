import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full-stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Shangrila Microsystem Pvt Ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - Present (Intership)
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my internship at Shangrila Microsystem Pvt Ltd, I've gained practical experience as a Full-stack Developer. I've worked with Laravel and Vue.js to develop user-friendly web applications. I've contributed to both front-end and back-end tasks, enhancing my skills in modern web development technologies.

                  My time here has exposed me to real-world projects, taught me about collaboration, and given me insights into agile development practices. I've enjoyed learning and contributing, and I'm excited to continue my journey in web development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        {/*Education*/}
        <div className="right flex-1 flex items-center justify-center">
          <fieldset data-aos="zoom-in" className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>

            {/* First Education Entry */}
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BSc (Hons) Computing                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  London Metropolitan University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  February 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Pursuing a BSc (Hons) in Computing at London Metropolitan University. My studies have equipped me with a solid foundation in various areas of computer science. From algorithms to software engineering principles, I've developed a deep understanding of the field.

                  I've had the opportunity to work on practical projects and collaborate with fellow students, enhancing my problem-solving skills and critical thinking. I'm excited to continue expanding my knowledge and applying it to real-world challenges in the tech industry.
                </p>
              </div>
            </div>
{/*            <br/>*/}
{/*            <br/>*/}
{/*            <br/>*/}
{/*            /!* Second Education Entry *!/*/}
{/*            <div className=" relative">*/}
{/*              /!* design *!/*/}
{/*              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">*/}
{/*                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>*/}
{/*                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>*/}
{/*                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>*/}
{/*              </div>*/}
{/*              /!* design *!/*/}
{/*              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">*/}
{/*                <h1 className="text-[1.4rem] font-semibold sm:text-xl">*/}
{/*                  Slc(Management)                </h1>*/}
{/*                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">*/}
{/*Mount Everest English secondary School        </span>*/}
{/*                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">*/}
{/*          March 2019 - December 2021*/}
{/*        </span>*/}
{/*                <p className="text-[.9rem] text-justify text-gray-500">*/}
{/*                  Description for another education entry...*/}
{/*                </p>*/}
{/*              </div>*/}
{/*            </div>*/}
{/*            <br/>*/}
{/*            <br/>*/}
{/*            <br/>*/}
{/*            /!* Third Education Entry *!/*/}
{/*            <div className=" relative">*/}
{/*              /!* design *!/*/}
{/*              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">*/}
{/*                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>*/}
{/*                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>*/}
{/*                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>*/}
{/*              </div>*/}
{/*              /!* design *!/*/}
{/*              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">*/}
{/*                <h1 className="text-[1.4rem] font-semibold sm:text-xl">*/}
{/*                  SEE                </h1>*/}
{/*                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">*/}
{/*          Mount Everest English secondary School*/}
{/*        </span>*/}
{/*                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">*/}
{/*          January 2009 - December 2019*/}
{/*        </span>*/}
{/*                <p className="text-[.9rem] text-justify text-gray-500">*/}
{/*                  Description for another education entry...*/}
{/*                </p>*/}
{/*              </div>*/}
{/*            </div>*/}

          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
