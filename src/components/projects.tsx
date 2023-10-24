"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { ProjectCard } from "./project-card";
import { ProjectTag } from "./project-tag";

import project1 from "../../public/static/images/project-1.png";
import project2 from "../../public/static/images/project-2.png";
import project3 from "../../public/static/images/project-3.png";
import project4 from "../../public/static/images/project-4.png";
import project5 from "../../public/static/images/project-5.png";
import project6 from "../../public/static/images/project-6.png";

interface ProjectsProps {
  dict: {
    title: string;
    tags: string[];
    descriptions: string[];
  };
}

export const Projects = ({ dict }: ProjectsProps) => {
  const projectsData = [
    {
      id: 1,
      title: "AI Companion",
      description: dict.descriptions[0],
      image: project1,
      tag: [dict.tags[0], dict.tags[1]],
      gitUrl: "https://github.com/pedrohxiv/ai-companion",
    },
    {
      id: 2,
      title: "Genius (AI SaaS)",
      description: dict.descriptions[1],
      image: project2,
      tag: [dict.tags[0], dict.tags[1]],
      gitUrl: "https://github.com/pedrohxiv/ai-saas",
    },
    {
      id: 3,
      title: "Discord Demo",
      description: dict.descriptions[2],
      image: project3,
      tag: [dict.tags[0], dict.tags[1]],
      gitUrl: "https://github.com/pedrohxiv/discord-demo",
    },
    {
      id: 4,
      title: "LMS",
      description: dict.descriptions[3],
      image: project4,
      tag: [dict.tags[0], dict.tags[1]],
      gitUrl: "https://github.com/pedrohxiv/learning-management-system",
    },
    {
      id: 5,
      title: "E-commerce App",
      description: dict.descriptions[4],
      image: project5,
      tag: [dict.tags[0], dict.tags[2]],
      gitUrl: "https://github.com/pedrohxiv/ecommerce-app",
    },
    {
      id: 6,
      title: "Delivery App",
      description: dict.descriptions[5],
      image: project6,
      tag: [dict.tags[0], dict.tags[2]],
      gitUrl: "https://github.com/pedrohxiv/delivery-app",
    },
  ];

  const [tag, setTag] = useState(dict.tags[0]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {dict.title}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={dict.tags[0]}
          isSelected={tag === dict.tags[0]}
          onClick={(newTag: string) => setTag(newTag)}
        />
        <ProjectTag
          name={dict.tags[1]}
          isSelected={tag === dict.tags[1]}
          onClick={(newTag: string) => setTag(newTag)}
        />
        <ProjectTag
          name={dict.tags[2]}
          isSelected={tag === dict.tags[2]}
          onClick={(newTag: string) => setTag(newTag)}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
