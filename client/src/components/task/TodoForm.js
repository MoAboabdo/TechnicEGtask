import React, { useState } from "react";
import axios from "axios";
import styles from "./todoList.module.css";
import { navigate } from "@reach/router";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState([]); //errors

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/task/new", {
        title,
        description,
        price,
        status,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className={styles.background}>
      <h1>Make a Task</h1>

      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => {
          return (
            <p style={{ color: "red" }} key={index}>
              {err}
            </p>
          );
        })}
        <p>
          <label>Task Title</label>
          <br />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Status</label>
          <br />
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Todo">TODO</option>
            <option value="Inprogress">IN-PROGRESS</option>
            <option value="Testing">TESTING</option>
          </select>
        </p>

        <input type="submit" value="Add task" />
      </form>
    </div>
  );
};
export default TodoForm;
