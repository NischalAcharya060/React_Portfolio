import React from "react";
import {FaFacebook, FaLinkedinIn, FaTelegramPlane} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import {AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-violet-700 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Nischal Acharya</h2>
        {/*<div className=" flex items-center justify-center gap-8 sm:gap-5">*/}
        {/*  <a */}
        {/*  data-aos="fade-up" data-aos-duration="1000"*/}

        {/*    href=""*/}
        {/*    className="box font-medium text-white   flex items-center justify-center flex-col"*/}
        {/*  >*/}
        {/*    <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />*/}
        {/*    <p>Telegram</p>*/}
        {/*  </a>*/}
        {/*  <a */}
        {/*  data-aos="fade-up" data-aos-duration="1200"*/}

        {/*    href=""*/}
        {/*    className="box font-medium text-white  flex items-center justify-center flex-col"*/}
        {/*  >*/}
        {/*    <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />*/}
        {/*    <p>WhatsApp</p>*/}
        {/*  </a>*/}
        {/*  <a */}
        {/*  data-aos="fade-up" data-aos-duration="1400"*/}

        {/*    href=""*/}
        {/*    className="box font-medium text-white  flex items-center justify-center flex-col"*/}
        {/*  >*/}
        {/*    <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />*/}
        {/*    <p>Instagram</p>*/}
        {/*  </a>*/}
        {/*</div>*/}
          <div className="icons flex mt-5">
              <ul
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className=" flex gap-5"
              >
                  <li>
                      <a href="https://github.com/NischalAcharya060" target={"_blank"}>
                          {" "}
                          <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/nischal-acharya101/" target={"_blank"}>
                          {" "}
                          <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                      </a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/its_nischalacharya/" target={"_blank"}>
                          {" "}
                          <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                      </a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/Nischal.Acharya.58760" target={"_blank"}>
                          {" "}
                          <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                      </a>
                  </li>
                  <li>
                      <a href="https://twitter.com/Nischal79783380" target={"_blank"}>
                          {" "}
                          <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                      </a>
                  </li>
              </ul>
          </div>

        <div className="sm:text-[12px]" style={{ cursor: 'pointer' }}>
          | Copyright &copy;<span>{new Date().getFullYear()} </span>
          <a href="https://acharyanischal.com.np" target="_blank" style={{ fontWeight: 'bold' }}>Nischal Acharya</a> All rights reserved |
        </div>
      </div>
    </div>
  );
};

export default Footer;
