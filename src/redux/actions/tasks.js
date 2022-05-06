import {
  GET_TASKS,
  GET_TASK,
  ADD_CHECKLIST_ITEM,
  EDIT_CHECKLIST_ITEM,
  COMPLETE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
  ADD_TASK_MEMBER,
  EDIT_DESCRIPTION,
} from "../types";
import taskApi from "api/taskApi";
export const getTasks = (listId) => async (dispatch) => {
  const { tasks } = await taskApi.getAll(listId);
  dispatch({
    type: GET_TASKS,
    payload: tasks.data,
  });
};

export const getTask = (id) => async (dispatch) => {
  const task = await taskApi.get(id);
  dispatch({
    type: GET_TASK,
    payload: task.data,
  });
};
export const addChecklistItem = (taskId, data) => async (dispatch) => {
  const checklist = await taskApi.addChecklist(taskId, data);
  dispatch({
    type: ADD_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const editChecklistItem = (taskId, itemId, data) => async (dispatch) => {
  const checklist = await taskApi.editChecklist(taskId, itemId, data);
  dispatch({
    type: EDIT_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const completeChecklistItem = (formData) => async (dispatch) => {
  const checklist = await taskApi.completeChecklist(formData);
  dispatch({
    type: COMPLETE_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const deleteChecklistItem = (taskId, itemId) => async (dispatch) => {
  const checklist = await taskApi.deleteChecklist(taskId, itemId);
  dispatch({
    type: DELETE_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const addTaskMember = (formData) => async (dispatch) => {
  const { add, taskId, userId } = formData;
  const member = await taskApi.addMember(add, taskId, userId);
  dispatch({
    type: ADD_TASK_MEMBER,
    payload: member.data,
  });
};
export const editTaskDescription = (taskId, formData) => async (dispatch) => {
  const { description } = formData;
  const res = await taskApi.editTaskDescription(taskId, description);
  dispatch({
    type: EDIT_DESCRIPTION,
    payload: res.data,
  });
};