import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion } from "framer-motion";


type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky flex justify-between items-start max-w-7xl mx-auto p-5 z-20">
        {/* social icons */}
      <motion.div className="flex flex-row items-center"
      
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}

      animate={{
        x:0,
        opacity:1,
        scale:1
      }}

      transition={{
        duration:1.5,
      }}
      >
        <SocialIcon
          url="https://www.youtube.com/thenetninja"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/thenetninja"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/thenetninja"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* contact me */}

      <motion.div 
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}

      animate={{
        x:0,
        opacity:1,
        scale:1
      }}

      transition={{
        duration:1.5,
      }}
      
      
      className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> Get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
