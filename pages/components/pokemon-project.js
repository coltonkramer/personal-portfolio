import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReturnHome from "./return-home";
import { ProjectsOverviewContainerStyle, ProjectLinksContainer } from "./style.module.css";
import projects from "../../helpers/projectsData";

const ProjectsOverview = () => {
  return (
    <>
      <ReturnHome />
      <div className={ProjectsOverviewContainerStyle}>
        <div>
        <h1>{projects[0].title}</h1>
        <h2>{projects[0].subtitle}</h2>
        </div>
        <Image
          src={projects[0].secondImg}
          alt={projects[0].subtitle}
          title={projects[0].title}
          width={600}
          height={400}
          />
        <h3>How the Game Works</h3>
        <p>{projects[0].howItWorks}</p>
        <h3>What Went Well</h3>
        <p>{projects[0].pro}</p>
        <h3>What Went Poorly</h3>
        <p>{projects[0].con}</p>
        <h3>Links to the</h3>
        <div className={ProjectLinksContainer}>
        <Link href={projects[0].appLink}>
          App
        </Link> 
        <Link href={projects[0].github}>
        <a>Repo</a>
        </Link> 
        </div>
      </div>
    </>
  );
};

export default ProjectsOverview;
