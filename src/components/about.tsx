"use client";

import Image from "next/image";
import { useState, useTransition } from "react";

import { TabButton } from "./tab-button";

import aboutImage from "../../public/static/images/about-image.png";

interface AboutProps {
  dict: {
    title: string;
    description: string;
    columns: string[];
    educations: string[];
    certifications: string[];
  };
}

export const About = ({ dict }: AboutProps) => {
  const skills = [
    "Django",
    "Docker",
    "Express.js",
    "Flask",
    "JavaScript",
    "Jest",
    "JWT",
    "Mocha",
    "MongoDB",
    "MySQL",
    "Next JS",
    "Node.js",
    "Prisma",
    "Python",
    "React",
    "React Native",
    "Redux",
    "Sequelize",
    "Tailwind CSS",
    "Testing Library",
    "TypeScript",
  ];

  const itemsPerColumn = Math.ceil(skills.length / 3);
  const skillColumns = Array.from({ length: 3 }, (_, index) =>
    skills.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
  );

  const TAB_DATA = [
    {
      title: dict.columns[0],
      id: "skills",
      content: skillColumns.map((column, index) => (
        <ul key={index} className="list-disc pl-2">
          {column.map((skill, skillIndex) => (
            <li key={skillIndex}>{skill}</li>
          ))}
        </ul>
      )),
    },
    {
      title: dict.columns[1],
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>{dict.educations[0]}</li>
          <li>{dict.educations[1]}</li>
          <li>{dict.educations[2]}</li>
        </ul>
      ),
    },
    {
      title: dict.columns[2],
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>{dict.certifications[0]}</li>
          <li>{dict.certifications[1]}</li>
          <li>{dict.certifications[2]}</li>
          <li>{dict.certifications[3]}</li>
          <li>{dict.certifications[4]}</li>
          <li>{dict.certifications[5]}</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white pt-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about image"
          src={aboutImage}
          height={500}
          width={500}
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{dict.title}</h2>
          <p className="text-base lg:text-lg">{dict.description}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {TAB_DATA[0].title}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {TAB_DATA[1].title}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {TAB_DATA[2].title}{" "}
            </TabButton>
          </div>
          <div
            className={`mt-8 ${tab === "skills" && "grid grid-cols-3 gap-4"}`}
          >
            {TAB_DATA.find(({ id }) => id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
