import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");
    // console.log(import.meta.env.VITE_SERVICE_ID);
    // console.log(import.meta.env.VITE_TEMPLATE_ID);
    // console.log(import.meta.env.VITE_USER_ID);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your actual service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your actual template ID
        formData,
        import.meta.env.VITE_USER_ID // Replace with your actual user ID
      );

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatusMessage(
        `Failed to send message: ${
          error.text || "An unexpected error occurred. Please try again."
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="pt-10 pb-40 bg-gradient-to-r from-purple-600 to-indigo-800 "
      id="contact"
    >
      <h1 className="text-4xl font-bold text-center text-gradient mb-8">
        Contact
      </h1>
      <div>
        <div className="w-full px-6 sm:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
          <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6 justify-center mb-10 sm:mb-0">
            <a
              href="mailto:sujaypagam777@gmail.com"
              className="flex items-center text-indigo-300 hover:text-indigo-500 transition-colors"
            >
              <FaEnvelope className="text-3xl mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sujay-pagam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-300 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedin className="text-3xl mr-2" />
              LinkedIn
            </a>
            {/* Uncomment below to add WhatsApp if needed */}
            {/* <a
              href="https://wa.me/1234567890"
              className="flex items-center text-indigo-300 hover:text-indigo-500 transition-colors"
            >
              <FaWhatsapp className="text-3xl mr-2" />
              WhatsApp
            </a> */}
          </div>

          <form
            className="w-full max-w-lg bg-white text-black p-8 rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Send a Message
            </h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Write your message"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {statusMessage && (
              <p className="mt-4 text-center text-lg text-gray-800">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
