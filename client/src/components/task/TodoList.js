import React from "react";
import { Link } from "@reach/router";
import styles from "./todoList.module.css";
import axios from "axios";

const TodoList = (props) => {
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
      <h1>Tasks</h1>
      <table>
        <tr>
          <th>Task Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Status</th>

          <th></th>
        </tr>
        {props.tasks.map((task, idx) => {
          if (task.status === "Todo")
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
          if (task.status === "Inprogress")
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
          if (task.status === "Testing")
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

export default TodoList;
