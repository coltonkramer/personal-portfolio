import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import { ProjectsContainer, ProjectsBodyContainer } from "./style.module.css";
import projects from "../assets/projectsData"





const Projects = () => {

  const buildImageContainer = (project) => {
    return(
      <Link href="/">
      <a>
      <Image
        src={project.img}
        alt={project.subtitle}
        title={project.title}
        width={400}
        height={400}
        /> 
        </a>
        </Link>
    )
  }

    return (
    <>
    <div className={ProjectsContainer}>
        <div><h2>Projects</h2></div>
    <div className={ProjectsBodyContainer}>
      {projects.map(project => {
        const projectContainer = buildImageContainer(project)
        return projectContainer
      })}
    </div>
    </div>
    </>
    )
  }

export default Projects