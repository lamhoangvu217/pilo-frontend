import React, { useState, useEffect } from "react";
import projectApi from "api/projectApi";
export default function useProjectList() {
  const [loading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { projects } = await projectApi.getAll();
        const results = projects.data.filter((project) => {
          return project !== null;
        });
        setProjectList(results);
        console.log(projectList);
      } catch (error) {
        console.log("Faild to fetch project list");
      }
      setLoading(false);
    })();
  }, []);
  return { projectList, loading };
}
