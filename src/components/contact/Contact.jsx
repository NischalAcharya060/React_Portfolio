import React, { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [animate, setAnimate] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // Animation duration
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const reCAPTCHAValue = recaptchaRef.current.getValue();

    if (!reCAPTCHAValue) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    const currentTime = new Date().getTime();
    if (lastSubmissionTime && currentTime - lastSubmissionTime < 5 * 60 * 1000) {
      toast.error("Please wait at least 5 minutes before submitting another form.");
      return;
    }

    try {
      await emailjs.sendForm(
          "service_elk86vl",
          "template_oai1n69",
          e.target,
          "-qiVxTcSYDKmI-Zkf"
      );
      toast.success("Your form has been submitted successfully");
      setLastSubmissionTime(currentTime);
      recaptchaRef.current.reset();
    } catch (error) {
      toast.error("Error while submitting your form. Please try again later.");
    }

    e.target.reset();
  };

  return (
      <div id="contact" className="container mx-auto mt-16">
        <style>
          {`
          @keyframes fly {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(50px) rotate(20deg);
            }
            100% {
              transform: translateX(100px) rotate(45deg);
              opacity: 0;
            }
          }

          .animated-plane {
            display: inline-block;
            animation: fly 0.5s ease-in-out forwards;
          }
        `}
        </style>
        <div className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl flex items-center">
            Contact <FaEnvelope className="ml-2"/>
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        <div className="left flex-1 w-full" data-aos="fade-up">
          <p className="text-gray-700 font-medium">
            Here You can Contact Me.
          </p>
        </div>
        <div className="contact-info-boxes" data-aos="fade-up">
          <a href="mailto:Nischal060@gmail.com" className="contact-info-box">
            <AiOutlineMail className="icon"/>
            <div>
              <h3>Email</h3>
              <p>Nischal060@gmail.com</p>
            </div>
          </a>
          <a href="tel:+9779806081469" className="contact-info-box">
            <AiOutlineMobile className="icon"/>
            <div>
              <h3>Phone Number</h3>
              <p>+977-9806081469</p>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/b26iHtYRTUJWR1df9" className="contact-info-box" target="_blank"
             rel="noopener noreferrer">
            <AiOutlineHome className="icon"/>
            <div>
              <h3>Address</h3>
              <p>Gauradaha Jhapa, Nepal</p>
            </div>
          </a>
        </div>
        <div className="w-full mb-16">
          <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114187.17942643426!2d87.6365509580823!3d26.57316242938736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59aeb2ac5d359%3A0x8a740efe290d8ed2!2sGauradaha%2057200!5e0!3m2!1sen!2snp!4v1714705717716!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
          <form ref={formRef} onSubmit={sendEmail} data-aos="zoom-in"
                className="flex flex-col gap-6 w-[90%] md:w-[100%] mx-auto">
            <div className="text-left w-full">
              <label htmlFor="user_email" className="block mb-2 text-gray-700 font-semibold flex items-center">
                <span className="material-icons mr-2">email</span>
                Email
              </label>
              <input
                  className="px-4 py-2 border border-gray-300 shadow-sm rounded-lg w-full focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="user_email"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="user_name" className="block mb-2 text-gray-700 font-semibold flex items-center">
                <span className="material-icons mr-2">person</span>
                Name
              </label>
              <input
                  className="px-4 py-2 border border-gray-300 shadow-sm rounded-lg w-full focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  type="text"
                  placeholder="Enter Your Name"
                  name="user_name"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="user_subject" className="block mb-2 text-gray-700 font-semibold flex items-center">
                <span className="material-symbols-outlined">import_contacts</span>
                Subject
              </label>
              <input
                  className="px-4 py-2 border border-gray-300 shadow-sm rounded-lg w-full focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  type="text"
                  placeholder="Enter Your Subject"
                  name="user_subject"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="message" className="block mb-2 text-gray-700 font-semibold flex items-center">
                <span className="material-icons mr-2">message</span>
                Message
              </label>
              <textarea
                  className="px-4 py-2 border border-gray-300 shadow-sm rounded-lg w-full focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  rows="4"
                  placeholder="Write Your Message"
                  name="message"
                  required
              />
            </div>
            <div className="flex justify-center w-full">
              <ReCAPTCHA ref={recaptchaRef} sitekey="6Leu0q4nAAAAAA6B5LZvGfCbM432JKOtvgCtiUCO"/>
            </div>
            <button
                className="bg-violet-700 hover:bg-violet-800 w-full text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
                type="submit" onClick={handleClick}>
              <span>Send</span>
              <RiSendPlaneFill className={`ml-2 ${animate ? 'animated-plane' : ''}`}/>
            </button>
            <ToastContainer/>
          </form>
        </div>

      </div>
  );
};

export default Contact;
