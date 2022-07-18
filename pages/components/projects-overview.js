import React from "react";
import { useLocation } from 'react-router-dom';
import  Navigation  from "../components/navigation"
import projects from "../assets/projectsData";


const ProjectsOverview = () => {
    const location = useLocation();
    const { whichProject } = location.state;
  return (
    <>
    <Navigation/>
    {console.log(whichProject)}
      <div className="ProjectsOverviewContainerStyle">
          <h1>This is the projects overview page</h1>
        <div className="ProjectsOverviewContainer">
        </div>
      </div>
    </>
  );
};

export default ProjectsOverview;
