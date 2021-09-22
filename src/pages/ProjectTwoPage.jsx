import React from "react";
import ProjectPage from "../components/organisms/ProjectPage/ProjectPage";
import { projectsData } from "../data";

const ProjectTwoPage = () => {
  return (
    <ProjectPage
      index={1}
      name={projectsData[1].name}
      img={projectsData[1].img}
      link={projectsData[1].link}
      about={projectsData[1].about}
      siteLink={projectsData[1].siteLink}
    />
  );
};

export default ProjectTwoPage;
