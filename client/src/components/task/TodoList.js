import React from "react";
import { Link } from "@reach/router";
import styles from "./todoList.module.css";

const TodoList = (props) => {
  return (
    <div className={styles.background}>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        {props.tasks.map((task, idx) => {
          if (task.status === "Todo")
            return (
              <>
                <tbody>
                  <tr key={idx}>
                    <td>
                      <Link to={"/tasks/" + task.id}>{task.title}</Link>
                    </td>
                    <td>{task.description}</td>
                    <td>{task.price}</td>
                    <td className={styles.High}>{task.status}</td>
                  </tr>
                </tbody>
              </>
            );
          if (task.status === "Inprogress")
            return (
              <>
                <tbody>
                  <tr key={idx}>
                    <td>
                      <Link to={"/tasks/" + task.id}>{task.title}</Link>
                    </td>
                    <td>{task.description}</td>
                    <td>{task.price}</td>
                    <td className={styles.High}>{task.status}</td>
                  </tr>
                </tbody>
              </>
            );
          if (task.status === "Testing")
            return (
              <>
                <tbody>
                  <tr key={idx}>
                    <td>
                      <Link to={"/tasks/" + task.id}>{task.title}</Link>
                    </td>
                    <td>{task.description}</td>
                    <td>{task.price}</td>
                    <td className={styles.High}>{task.status}</td>
                  </tr>
                </tbody>
              </>
            );
        })}
      </table>
    </div>
  );
};

export default TodoList;
