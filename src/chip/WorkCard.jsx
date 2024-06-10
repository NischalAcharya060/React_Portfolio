import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import {FaBriefcase} from "react-icons/all.js";

const WorkCard = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // Number of projects to display initially

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 6); // Increment the number of projects displayed
  };

  const reversedData = [...data].reverse();

  return (
      <>
        {reversedData.slice(0, visibleProjects).map((data) => {
          return (
              <div
                  data-aos="zoom-in"
                  key={data.id}
                  className="flex flex-col justify-center items-center gap-4"
              >
                <POPUP className="img-content relative">
                  <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                    <img
                        src={data.img}
                        alt={data.alt}
                        className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                    />
                  </div>

                  <div
                      className={`popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
                  >
                    <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                      {data.desc}
                    </p>
                    <br/>
                    <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">Technologies Used</p>
                    <span className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]" style={{ padding: '6px 12px', backgroundColor: '#f2f2f2', marginRight: '6px', borderRadius: '15px', }}>
                  {data.tech}
                </span>
                    <div className="flex items-center justify-center gap-4">
                      <Link
                          to={data.link}
                          target="_blank"
                          className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                      >
                        <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                        <p className="text-black">Demo</p>
                      </Link>
                      <Link
                          to={data.git}
                          target="_blank"
                          className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                      >
                        <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                        <p className="text-black">Code</p>
                      </Link>
                    </div>
                  </div>
                </POPUP>
                <p className="text-gray-800 text-xl font-medium sm:text-lg">
                  {data.title}
                </p>
              </div>
          );
        })}
        {visibleProjects < data.length && (
            <div className="flex justify-center items-center mt-6" data-aos="fade-up-right">
              <button
                  onClick={handleViewMore}
                  className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                <FaBriefcase className="mr-2"/> View More Projects
              </button>
            </div>


        )}
      </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;

  img {
    &:hover {
      transform: scaleX(2);
    }
  }

  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
