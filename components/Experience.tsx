"use client";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { usetheme } from "@/context/theme-context";

const Experience = () => {
   const { ref } = useSectionInView("Experience");
   const { theme } = usetheme();
   return (
      <section id="experience" className="experience-section" ref={ref}>
         <SectionHeading title="Experience" />
         <VerticalTimeline lineColor="" animate={true}>
            {experiencesData.map((item, index) => (
               <React.Fragment key={index}>
                  <VerticalTimelineElement
                     visible={true}
                     contentStyle={{
                        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                     }}
                     contentArrowStyle={{
                        borderRight:
                           theme === "light"
                              ? "0.4rem solid #9ca3af"
                              : "0.4rem solid rgba(255, 255, 255, 0.5)",
                     }}
                     date={item.date}
                     icon={item.icon}
                     iconStyle={{
                        background: theme === "light" ? "white" : "#1d2432",
                        fontSize: "1.5rem",
                     }}
                  >
                     <h3 className="font-semibold capitalize">{item.title}</h3>
                     <p className="font-normal !mt-0">{item.location}</p>
                     <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                        {item.description}
                     </p>
                  </VerticalTimelineElement>
               </React.Fragment>
            ))}
         </VerticalTimeline>
      </section>
   );
};
export default Experience;
