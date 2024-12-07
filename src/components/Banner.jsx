import React from "react";
import sujay_portfolio_photo from "../assets/sujay_portfolio_photo.jpg";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section id="home" className="section flex items-center py-10 lg:py-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Left Side */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* Profile Picture (mobile) */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="lg:hidden mb-6 flex items-center justify-center"
            >
              <img
                className="w-32 h-32 rounded-full"
                src={sujay_portfolio_photo}
                alt="Sujay Pagam"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight pb-6 pt-6 sm:pt-0"
            >
              SUJAY PAGAM
            </motion.h1>

            {/* Type Animation */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-purple-400 mb-6 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[60px] font-secondary font-semibold leading-6 sm:leading-8"
            >
              <span>I am a </span>
              <TypeAnimation
                sequence={["Developer", "Coder", 2000, "", 50]}
                speed={300}
                repeat={Infinity}
                className="text-accent"
                wrapper="span"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl"
            >
              I'm a frontend web developer passionate about creating dynamic and
              user-friendly websites. Always eager to learn, I explore new
              technologies and frameworks to enhance my skills and deliver
              innovative solutions. I thrive on challenges and enjoy staying
              up-to-date with the latest trends in web development.
            </motion.p>

            {/* Buttons and Social Links */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-max gap-x-6 flex items-center justify-center mx-auto lg:mx-0 mb-12 flex-wrap"
            >
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>

              <div className="flex items-center text-[20px] gap-x-6 mt-4 lg:mt-0">
                <a
                  href="https://www.youtube.com/@sujay555"
                  aria-label="YouTube"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://github.com/5ujay"
                  aria-label="GitHub"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujay-pagam"
                  aria-label="LinkedIn"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Picture (desktop) */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto lg:mx-0"
          >
            <img
              className="rounded-full"
              src={sujay_portfolio_photo}
              alt="Sujay Pagam"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
