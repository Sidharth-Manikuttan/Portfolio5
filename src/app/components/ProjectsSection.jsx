"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Digital Menu Website",
    description: "A Digital Menu Website was created by me and my team using React.js as Front-End and SupaBase for Back-End as a part of YUKTHI'24 Hackathon ",
    image: "/images/projects/Digital_Menu.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 2,
    title: "CTF Event Website",
    description: "A Dynamic Website that hides flags for the Round-2 of Cyber Odyssey Capture the Flag event conducted as a part of ASTHRA'24 TechFest.",
    image: "/images/projects/CFT.png",
    tag: ["All", "Web"],
    gitUrl: "https://sidharth-manikuttan.github.io/CYBER-ODYSSEY-WEBSITE2/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A Static Website model for introducing Apple products as a part of the WEB QUEST web development challenge conducted by TinkerHub.",
    image: "/images/projects/APPLE.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 4,
    title: "Mobile App UI",
    description: "APP UI Design of a real-time current monitoring mobile app created as a part of my Mini Project.",
    image: "/images/projects/UIPOWER.png",
    tag: ["All", "UI Design"],
    gitUrl: "https://www.figma.com/file/3Tu0GhB8x2cjTr9gpfjnZg/Curently-UI-Prototype?type=design&mode=design&t=XslafAkxEkppGjPB-1",
  },
  {
    id: 5,
    title: "VR Headset UI",
    description: "A concept model of a UI Design in a Virtual Reality headset interface like in 'Apple Vision Pro'.",
    image: "/images/projects/PRO.png",
    tag: ["All", "UI Design"],
    gitUrl: "https://www.figma.com/file/RhvFGfomlepHWG57yUTDli/Vision-Pro-Concept?type=design&mode=design&t=XslafAkxEkppGjPB-1",
  },
  {
    id: 6,
    title: "Website UI",
    description: "Website UI Design for an Electric Bike E-commerce website used for booking and selling E-bikes online.",
    image: "/images/projects/BIKE.png",
    tag: ["All", "UI Design"],
    gitUrl: "https://www.figma.com/file/1LB8GZOj3cIeX2KTOI5Ybo/E-Bike-Site?type=design&node-id=0%3A1&mode=design&t=XslafAkxEkppGjPB-1",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI Design"
          isSelected={tag === "UI Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
