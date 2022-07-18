import React from "react";
import { Router, useLocation } from 'react-router-dom';
import  Navigation  from "../components/navigation"
import projects from "../assets/projectsData";


const ProjectsOverview = () => {
    <Router>
    const location = useLocation();
    {/* const { whichProject } = location.state; */}
    </Router>
  return (
    <>
    <Navigation/>
    {console.log(location)}
      <div className="ProjectsOverviewContainerStyle">
          <h1>This is the projects overview page</h1>
        <div className="ProjectsOverviewContainer">
        </div>
      </div>
    </>
  );
};

export default ProjectsOverview;
