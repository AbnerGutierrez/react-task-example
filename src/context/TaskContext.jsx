import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../data/task.js";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, sEtTasks] = useState([]);

  useEffect(() => {
    sEtTasks(data);
  }, []);

  function createTask(task) {
    sEtTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    sEtTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
