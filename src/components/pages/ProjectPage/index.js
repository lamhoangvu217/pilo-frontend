import React, { useEffect } from "react";
import ProjectPageHeader from "./Header";
import MainProjectPage from "./MainProjectPage";
import MetaTitle from "utils/MetaTitle";
import useProjectDetail from "hooks/useProjectDetail";
import { useParams } from "react-router-dom";
function ProjectPage() {
  const projectId = useParams();
  const { project, loading } = useProjectDetail(projectId.id);

  return (
    <>
      <MetaTitle title={`Project - ${project.name}`} />
      <div className="">
        <ProjectPageHeader />
        <MainProjectPage />
      </div>
    </>
  );
}

export default ProjectPage;
