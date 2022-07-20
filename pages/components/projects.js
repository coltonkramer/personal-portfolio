import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ProjectsContainer,
  ProjectsBodyContainer,
  ProjectsChipStyle,

  ProjectsChipStyleLink,
} from "./style.module.css";
import projects from "../assets/projectsData";

const Projects = () => {
  const buildImageContainer = (project) => {
    return (
      <Image
        src={project.img}
        alt={project.subtitle}
        title={project.title}
        width={400}
        height={400}
      />
    );
  };

  return (
    <>
      <div className={ProjectsContainer} id="projects-container">
        <div>
          <h2>Projects</h2>
        </div>
        <div className={ProjectsBodyContainer}>
          <div className={ProjectsChipStyle}>
              <Link href="../components/pokemon-project" >
                <a>{buildImageContainer(projects[0])}</a>
              </Link>
          </div>
          <div className={ProjectsChipStyle}>
          <Link href="../components/calculator-project">
            <a>{buildImageContainer(projects[1])}</a>
          </Link>
          </div>
          <div className={ProjectsChipStyle}>
          <Link href="../components/rivian-project">
            <a>{buildImageContainer(projects[2])}</a>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
