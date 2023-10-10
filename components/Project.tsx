"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
   });
   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

   return (
      <motion.div
         ref={ref}
         style={{
            scale: scaleProgess,
            opacity: opacityProgess,
         }}
         className="group mb-3 sm:mb-8 last:mb-0"
         id="project"
      >
         <section className="project-section">
            <div className="project-info">
               <h3 className="text-2xl font-semibold">{title}</h3>
               <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {description}
               </p>
               <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {tags.map((tag, index) => (
                     <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                     >
                        {`#${tag}`}
                     </li>
                  ))}
               </ul>
            </div>

            <Image
               src={imageUrl}
               alt="Project I worked on"
               quality={95}
               className="project-image"
            />
         </section>
      </motion.div>
   );
};
export default Project;
