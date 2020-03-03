export const fetchTasks = () => {
  return fetch("http://localhost:3001/tasks").then(response => response.json());
};
