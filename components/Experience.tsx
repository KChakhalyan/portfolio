"use client";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
   const { ref } = useSectionInView("Experience");
   return (
      <section id="experience" className="experience-section" ref={ref}>
         <SectionHeading title="Experience" />
         <VerticalTimeline lineColor="" animate={true}>
            {experiencesData.map((item, index) => (
               <React.Fragment key={index}>
                  <VerticalTimelineElement
                     visible={true}
                     contentStyle={{
                        background: "#f3f4f6",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                     }}
                     contentArrowStyle={{
                        borderRight: "0.4rem solid #9ca3af",
                     }}
                     date={item.date}
                     icon={item.icon}
                     iconStyle={{
                        background: "rgba(255, 255, 255)",
                        fontSize: "1.5rem",
                     }}
                  >
                     <h3 className="font-semibold capitalize">{item.title}</h3>
                     <p className="font-normal !mt-0">{item.location}</p>
                     <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                  </VerticalTimelineElement>
               </React.Fragment>
            ))}
         </VerticalTimeline>
      </section>
   );
};
export default Experience;
