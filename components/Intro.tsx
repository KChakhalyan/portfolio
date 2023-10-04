"use client";

import { profileImage } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
   const { ref } = useSectionInView("Home", 0.5);

   return (
      <section ref={ref} className="name-section scroll-mt-80" id="home">
         {/* Profile Image start */}
         <div className="profileImg-container">
            <div className="relative">
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "tween", duration: 0.2 }}
               >
                  <Image
                     src={profileImage.src}
                     alt={profileImage.alt}
                     width={192}
                     height={192}
                     quality={95}
                     priority={true}
                     className="profileImg"
                  />
               </motion.div>
               <motion.span
                  className="emoji"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 125, delay: 0.2, duration: 0.7 }}
               >
                  👋🏻
               </motion.span>
            </div>
         </div>
         {/* Profile Image end */}

         {/* Main heading start */}
         <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <span className="font-bold">Hello, I'm Karen.</span> I'm{" "}
            <span className="font-bold">"Almost" a full-stack developer</span> with{" "}
            <span className="font-bold">few years</span> of experience. I enjoy building{" "}
            <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
         </motion.h1>
         {/* Main heading end */}
         {/* Buttoms start */}
         <motion.div
            className="buttons-group"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
         >
            <Link href="#contact" className="contact-me-btn group">
               Contact me{" "}
               <BsArrowRight className="group-hover:translate-x-1 group-hover:rotate-90 transition-all duration-300" />
            </Link>

            <a href="/CV.pdf" className="download-cv-btn group" target="_blank" download>
               Download CV{" "}
               <HiDownload className="group-hover:translate-y-0.5 transition-all duration-300" />
            </a>
            <div className="flex gap-2 mt-4">
               <a
                  href="https://www.linkedin.com/in/karen-chakhalyan-10401a88/"
                  className="social-btn group"
                  target="_blank"
               >
                  <BsLinkedin className="group-hover:transition-all duration-300" />
               </a>
               <a
                  href="https://github.com/KChakhalyan"
                  className="social-btn text-[1.35rem] group"
                  target="_blank"
               >
                  <FaGithub className="group-hover:transition-all duration-300" />
               </a>
            </div>
         </motion.div>
         {/* Buttoms end */}
      </section>
   );
};
export default Intro;
