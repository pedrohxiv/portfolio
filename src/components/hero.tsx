"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../../public/static/images/hero-image.png";

interface HeroProps {
  dict: {
    title: string;
    subtitles: string[];
    description: string;
    buttons: string[];
  };
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {dict.title}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Pedro",
                1000,
                dict.subtitles[0],
                1000,
                dict.subtitles[1],
                1000,
                dict.subtitles[2],
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 mr-16 lg:text-xl">
            {dict.description}
          </p>
          <div>
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                {dict.buttons[0]}
              </button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qPJNIwmUdPSILwMLFkQMQOe2f0hGMjjz/view?usp=sharing"
              target="_blank"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-[#121212]/90 rounded-full px-5 py-2">
                  {dict.buttons[1]}
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={heroImage}
              height={500}
              width={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
