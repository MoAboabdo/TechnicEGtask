import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/task/TodoList";
const Main = (props) => {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks/notDone").then((res) => {
      setTasks(res.data);
      setLoaded(true);
    });
  }, []);

  return <div>{loaded && <TodoList tasks={tasks} />}</div>;
};
export default Main;
