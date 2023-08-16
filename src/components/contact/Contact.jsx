import React, {useRef, useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const reCAPTCHAValue = recaptchaRef.current.getValue();

    if (!reCAPTCHAValue) {
      toast.error("Please complete the reCAPTCHA.");
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
        <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
          {/*<div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">*/}
            <div data-aos="zoom-in-right" className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
              <iframe
                  title="Google Map"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30116.575822373507!2d87.72271519462625!3d26.565914661095416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59aeb2ac5d359%3A0x8a740efe290d8ed2!2sGauradaha%2057200!5e0!3m2!1sen!2snp!4v1673688312482!5m2!1sen!2snp"
                  allowFullScreen
              ></iframe>
            </div>

            {/*<div className="flex p-5 items-center justify-center">*/}
            {/*  <button*/}
            {/*      data-aos="zoom-in"*/}
            {/*      className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]"*/}
            {/*  >*/}
            {/*    <BsArrowRight className="md:rotate-90" />*/}
            {/*  </button>*/}
            {/*</div>*/}
          {/*</div>*/}
          <div className="right flex-1">
            <form
                ref={formRef}
                onSubmit={sendEmail}
                data-aos="zoom-in"
                className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            >
              <input
                  className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="email"
                  placeholder="Email: Nischal060@gmail.com"
                  name="user_email"
                  required
              />
              <input
                  className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="text"
                  placeholder="Name: Nischal Acharya"
                  name="user_name"
                  required
              />
              <input
                  className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="text"
                  placeholder="Subject: I need help in this..."
                  name="user_subject"
                  required
              />
              <textarea
                  className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  rows="4"
                  cols="50"
                  placeholder="Message: Write your message"
                  name="message"
                  id="message"
                  required
              />
              <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Leu0q4nAAAAAA6B5LZvGfCbM432JKOtvgCtiUCO"
              />

              <button
                  className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
                  type="submit"
              >
                <span>Send</span>
                <RiSendPlaneFill />
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
