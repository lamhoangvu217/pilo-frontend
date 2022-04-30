import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const taskApi = {
  async getAll(listId) {
    const url = `/api/tasks/listCards/${listId}`;
    const tasks = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      tasks: tasks,
    };
  },
  get(id) {
    const url = `/api/tasks/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  create(data, listId) {
    const url = `/api/lists/${listId}`;
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
};
export default taskApi;
