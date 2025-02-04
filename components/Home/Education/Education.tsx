import SectionHeading from "@/components/Helper/SectionHeading"; // Assuming you have this component
import { education } from "@/constant/data"; // Importing the education data from data.ts
import React from "react";
import EducationCard from "./EducationCard"; // Importing the EducationCard component

const Education = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Education</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {education.map((education, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={education.id}
            >
              <EducationCard education={education} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
