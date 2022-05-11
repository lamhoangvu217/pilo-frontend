import { GET_PROJECTS, DELETE_PROJECT } from "../types";
import projectApi from "api/projectApi";
export const getProjects = () => async (dispatch) => {
  const { projects } = await projectApi.getAll();
  dispatch({
    type: GET_PROJECTS,
    payload: projects.data,
  });
};
export const deleteProject = (id) => async (dispatch) => {
  const { projects } = await projectApi.remove(id);
  dispatch({
    type: DELETE_PROJECT,
    payload: projects.data,
  });
};
