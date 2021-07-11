import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import styles from "./todoList.module.css";
import axios from "axios";

const PaidTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks/paid").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div className={styles.background}>
      <h1>PAID TASK</h1>
      <table>
        <tr>
          <th>Task Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Status</th>

          <th></th>
        </tr>
        {tasks.map((task) => {
          return (
            <>
              <tr key={task.id}>
                <td>
                  <Link to={"/tasks/" + task.id}>{task.title}</Link>
                </td>
                <td>{task.description}</td>
                <td>{task.price}</td>
                <td className={styles.High}>{task.status}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default PaidTask;
