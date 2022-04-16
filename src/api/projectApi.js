import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const projectApi = {
  async getAll() {
    const url = "/api/projects";
    const projectList = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      projects: projectList,
    };
  },
  get(id) {
    const url = `/api/projects/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  create(data) {
    const url = "/api/projects";
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  remove(id) {
    const url = `/api/projects/${id}`;
    return axiosClient.delete(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
};

export default projectApi;
