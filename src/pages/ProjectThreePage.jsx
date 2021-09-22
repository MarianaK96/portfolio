import React from "react";
import ProjectPage from "../components/organisms/ProjectPage/ProjectPage";
import { projectsData } from "../data";

const ProjectThreePage = () => {
  return (
    <ProjectPage
      index={2}
      name={projectsData[2].name}
      img={projectsData[2].img}
      link={projectsData[2].link}
      about={projectsData[2].about}
    />
  );
};

export default ProjectThreePage;
