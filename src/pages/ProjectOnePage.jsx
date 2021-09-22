import React from "react";
import ProjectPage from "../components/organisms/ProjectPage/ProjectPage";
import { projectsData } from "../data";

const ProjectOnePage = () => {
  return (
    <ProjectPage
      index={0}
      name={projectsData[0].name}
      img={projectsData[0].img}
      link={projectsData[0].link}
      about={projectsData[0].about}
      siteLink={projectsData[0].siteLink}
    />
  );
};

export default ProjectOnePage;
