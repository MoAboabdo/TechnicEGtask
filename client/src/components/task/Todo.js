import React, { useEffect, useState } from "react";
import { Link} from "@reach/router";
import styles from "./todoList.module.css";
import axios from "axios";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks/todo").then((res) => {
      setTasks(res.data);
      setLoaded(true);
    });
  }, []);

  const deleteTask = (taskID) => {
    axios
      .delete("http://localhost:5000/api/task/" + taskID + "/delete")
      .then((res) => {
        console.log(res);
      });
    window.location.reload(true);
  };

  return (
    <div className={styles.background}>
      <h1>TODO</h1>
      <table>
        <tr>
          <th>Task Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Status</th>

          <th></th>
        </tr>
        {tasks.map((task, idx) => {
          return (
            <>
              <tr key={idx}>
                <td>
                  <Link to={"/tasks/" + task.id}>{task.title}</Link>
                </td>
                <td>{task.description}</td>
                <td>{task.price}</td>
                <td className={styles.Low}>{task.status}</td>

                <td>
                  <button
                    onClick={(e) => {
                      deleteTask(task.id);
                    }}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Todo;
