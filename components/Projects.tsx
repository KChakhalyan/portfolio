"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
   const { ref } = useSectionInView("Projects", 0.5);
   return (
      <section id="projects" className="scroll-mt-28" ref={ref}>
         <SectionHeading title="Projects" />
         <div>
            {projectsData.map((project, index) => (
               <React.Fragment key={index}>
                  <Project {...project} />
               </React.Fragment>
            ))}
         </div>
      </section>
   );
};

export default Projects;
