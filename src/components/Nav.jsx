import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsClipboardData, BsChatSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-200} // Adjust offset as necessary
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors"
          >
            <FaCode />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-100}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-colors"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;