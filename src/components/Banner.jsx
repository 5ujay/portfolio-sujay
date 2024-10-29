import React from "react";
import sujay_portfolio_photo from "../assets/sujay_portfolio_photo.jpg";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section id="home" className="section flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Left Side */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* Profile Picture (mobile) */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="lg:hidden mb-4 flex items-center justify-center"
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
              className="text-[40px] sm:text-[55px] lg:text-[110px] font-bold leading-[0.8] pb-6 pt-6 sm:pt-0"
            >
              SUJAY PAGAM
            </motion.h1>

            {/* Type Animation */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[28px] sm:text-[36px] lg:text-[60px] font-secondary font-semibold leading-3"
            >
              <span>I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000, "", 100]}
                speed={50}
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
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-lg"
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
              className="max-w-max gap-x-6 flex items-center justify-center mx-auto lg:mx-0 mb-12"
            >
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>

              <div className="flex items-center text-[20px] gap-x-6">
                <a
                  href="https://www.youtube.com/@sujay555"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a href="https://github.com/5ujay" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujay-pagam"
                  aria-label="LinkedIn"
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
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
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
