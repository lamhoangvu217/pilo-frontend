import { useState, useEffect } from "react";
import taskApi from "api/taskApi";
export default function useTaskDetail(taskId) {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await taskApi.get(taskId);
        setTask(result.data);
      } catch (error) {
        console.log("failed to fetch", error);
      }
    })();
  }, [taskId]);
  return { task, loading };
}
