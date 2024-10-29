import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="section flex flex-col items-center justify-center py-10 h-screen  text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <div className="flex flex-col items-center mb-10">
        <p className="mb-4 text-center max-w-lg">
          Feel free to reach out to me through any of the following methods:
        </p>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://wa.me/9324044205?text=Hi%20SUJAY%20PAGAM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <FaWhatsapp className="text-3xl mr-2" />
            WhatsApp
          </a>
          <a
            href="mailto:sujaypagam777@gmail.com"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaEnvelope className="text-3xl mr-2" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sujay-pagam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <FaLinkedin className="text-3xl mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
