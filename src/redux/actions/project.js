import { GET_PROJECTS } from "../types";
import projectApi from "api/projectApi";
export const getProjects = () => async (dispatch) => {
  const { projects } = await projectApi.getAll();
  dispatch({
    type: GET_PROJECTS,
    payload: projects.data,
  });
};
