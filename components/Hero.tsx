import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "hi everyone, ",
      "Welcome to my potfolio",
      " My Name's Bahani Billel",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        className=" relative rounded-full w-32 h-32 object-cover mx-auto"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQG4FSN2T1V-9A/profile-displayphoto-shrink_800_800/0/1663578733769?e=1669248000&v=beta&t=6W-60PuCDvsS9Zy-S-cQPm741xTOtiX2tt4hDL8NAh8"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Digital Marketer
        </h2>
        <h1 className="text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Hero;
