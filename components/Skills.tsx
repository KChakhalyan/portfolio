"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
   const fadeInAnimationVariants = {
      initial: {
         opacity: 0,
         y: 100,
      },
      animate: (index: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.05 * index,
         },
      }),
   };
   const { ref } = useSectionInView("Skills");
   return (
      <section ref={ref} className="skills-section" id="skills">
         <SectionHeading title="Skills" />
         <ul className="skills-list">
            {skillsData.map((skill, index) => (
               <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  key={index}
                  className="skill-list__item"
               >
                  {skill}
               </motion.li>
            ))}
         </ul>
      </section>
   );
};
export default Skills;
