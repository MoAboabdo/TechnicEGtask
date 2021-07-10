import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import styles from "./back.module.css";

const Details = (props) => {
  const [task, setTasks] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task/" + props.id)
      .then((res) => setTasks(res.data));
  }, []);

  const editTask = (taskID) => {
    navigate("/tasks/" + task.id + "/edit");
  };

  return (
    <div className={styles.background}>
      <h2>Details about: {task.title} Task</h2>

      {/* <button onClick={(e) => { deleteTask(task._id) }}> Completed </button> */}
      <button
        onClick={(e) => {
          editTask(task.id);
        }}
      >
        {" "}
        edit{" "}
      </button>

      <p>
        <b>Description:</b> {task.description}
      </p>
      <p>
        <b>Price:</b> {task.price}
      </p>
      <p>
        <b>Status</b> {task.status}
      </p>
    </div>
  );
};
export default Details;
