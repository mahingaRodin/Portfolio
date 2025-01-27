import React from "react";
import EducationCard from "./EducationCard";

const education = [
  {
    id: 1,
    title: "Primary Level",
    summary:
      "Took my primary Level Education at Kigali Pacific College.",
    date: "2014-2020",
    image: "/images/frontend.jpg",
  },
  {
    id: 2,
    title: "Ordinary Level",
    summary:
      "Took my Ordinary Level Education at Groupe Scolaire Officiel de Butare where I learnt about the basic concepts of Sciences and Technology.",
    date: "2020-2023",
    image: "/images/backend.jpg",
  },
  {
    id: 3,
    title: "Advanced Level",
    summary:
      "Taking my Advanced Education in Rwanda Coding Academy where am learning Software Engineering and Embedded Systems and Cyber Security.",
    date: "Currently",
    image: "/images/fullstack.jpg",
  },
];

const EducationCardContainer = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {education.map((education) => (
        <EducationCard key={education.id} blog={education} />
      ))}
    </div>
  );
};

export default EducationCardContainer;
