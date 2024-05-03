import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineMobile } from "react-icons/ai";


const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

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
          "service_w7jgtt5",
          "template_oai1n69",
          e.target,
          "-qiVxTcSYDKmI-Zkf"
      );
      console.log("Email sent successfully");
      toast.success("Your form has been submitted successfully");
      setLastSubmissionTime(currentTime);
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Error sending email", error);
      toast.error("Error while submitting your form. Please try again later.");
    }

    e.target.reset();
  };

  return (
      <div id="contact" className="container m-auto mt-16">
        <div className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            Contact
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        <div
            data-aos="fade-up"
            className="left flex-1 w-full"
        >
          <p className="text-gray-700 font-medium w-[100%]">
            Here You can Contact Me.
          </p>
        </div>
        {/* Contact Information Boxes */}
        <div className="contact-info-boxes" data-aos="fade-up" data-aos-duration="5000">
          {/* Email Box */}
          <div className="contact-info-box">
            <AiOutlineMail className="icon"/>
            <div>
              <h3>Email</h3>
              <p>Nischal060@gmail.com</p>
            </div>
          </div>
          {/* Phone Number Box */}
          <div className="contact-info-box">
            <AiOutlineMobile className="icon"/>
            <div>
              <h3>Phone Number</h3>
              <p>+977-9806081469</p>
            </div>
          </div>
          {/* Address Box */}
          <div className="contact-info-box">
            <AiOutlineHome className="icon"/>
            <div>
              <h3>Address</h3>
              <p>Gauradaha Jhapa, Nepal</p>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full mt-5">
          <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114187.17942643426!2d87.6365509580823!3d26.57316242938736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59aeb2ac5d359%3A0x8a740efe290d8ed2!2sGauradaha%2057200!5e0!3m2!1sen!2snp!4v1714705717716!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
          ></iframe>
        </div>
        {/* Contact Form */}
        <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
          <form
              ref={formRef}
              onSubmit={sendEmail}
              data-aos="zoom-in"
              className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <div className="text-left w-full">
              <label htmlFor="user_email" className="block mb-1 text-gray-600 font-semibold flex items-center">
                <span className="material-icons mr-2">email</span>
                Email
              </label>
              <input
                  className="px-3 border border-gray-300 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="email"
                  placeholder="Nischal060@gmail.com"
                  name="user_email"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="user_name" className="text-gray-600 font-semibold mb-1 flex items-center">
                <span className="material-icons mr-2">person</span>
                Name
              </label>
              <input
                  className="px-3 border border-gray-300 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="text"
                  placeholder="Nischal Acharya"
                  name="user_name"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="user_subject" className="text-gray-600 font-semibold mb-1 flex items-center">
                <span className="material-symbols-outlined">import_contacts</span>
                &nbsp;
                Subject
              </label>
              <input
                  className="px-3 border border-gray-300 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="text"
                  placeholder="I need help in this..."
                  name="user_subject"
                  required
              />
            </div>
            <div className="text-left w-full">
              <label htmlFor="message" className="text-gray-600 font-semibold mb-1 flex items-center">
                <span className="material-icons mr-2">message</span>
                Message
              </label>
              <textarea
                  className="px-3 border border-gray-300 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  rows="4"
                  cols="50"
                  placeholder="Write your message"
                  name="message"
                  id="message"
                  required
              />
            </div>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Leu0q4nAAAAAA6B5LZvGfCbM432JKOtvgCtiUCO"
            />

            <button
                className="bg-violet-700 hover:bg-violet-800 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
                type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
            <ToastContainer/>
          </form>
        </div>
      </div>
  );
};

export default Contact;
