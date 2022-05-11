import { DELETE_PROJECT, GET_PROJECTS } from "../../types";
const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: payload,
      }
    default:
      return state;
  }
}
