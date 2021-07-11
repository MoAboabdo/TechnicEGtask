import React, { useEffect, useState } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";
import styles from "./back.module.css";

const Update = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [done, setDone] = useState();
  const [paid, setPaid] = useState();

  useEffect(() => {
    //gets the task that we are updating
    axios.get("/api/task/" + id).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setStatus(res.data.status);
      setDone(res.data.done);
      setPaid(res.data.paid);
    });
  }, []);

  const updateTask = (e) => {
    e.preventDefault();
    axios
      .post("/api/tasks/" + id + "/update", {
        title,
        description,
        price,
        status,
        done,
        paid,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      });
  };

  return (
    <div className={styles.background}>
      <h2> Update </h2>

      <Link to={"/Home"}>cancel</Link>

      <form onSubmit={updateTask}>
        <p>
          <label>title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Desctiption</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Status</label>
          <br />
          <select name="status" onChange={(e) => setStatus(e.target.value)}>
            <option value={status}>{status}</option>
            <option value="Todo">TODO</option>
            <option value="Inprogress">IN-PROGRESS</option>
            <option value="Testing">TESTING</option>
          </select>
        </p>
        <p>
          <label>Done</label>
          <br />
          <input
            type="text"
            name="done"
            value={done}
            onChange={(e) => {
              setDone(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Paid</label>
          <br />
          <input
            type="text"
            name="paid"
            value={paid}
            onChange={(e) => {
              setPaid(e.target.value);
            }}
          />
        </p>
        <input type="submit" value="Edit task" /> <br />
      </form>
    </div>
  );
};
export default Update;
