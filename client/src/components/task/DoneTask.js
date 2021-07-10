import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import styles from "./todoList.module.css";
import axios from "axios";

const DoneTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/tasks/high").then((res) => {
      setTasks(res.data);
      setLoaded(true);
    });
  }, []);

  const deleteTask = (taskID) => {
    axios
      .delete("http://localhost:8000/api/task/" + taskID + "/delete")
      .then((res) => {
        console.log(res);
      });
    window.location.reload(true);
  };

  return (
    <div className={styles.background}>
      <h1>DONE TASK</h1>
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
                <td className={styles.High}>{task.status}</td>
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

export default DoneTask;
