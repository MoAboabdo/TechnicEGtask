import React from "react";
import styles from "./Sidebar.module.css";
import { Link, navigate } from "@reach/router";

function Sidebar() {
  return (
    <div className={styles.background}>
      <div className={styles.back}>
        <div className={styles.newHalf}>
          <div className={styles.addButtonBox}>
            <div className={styles.NewTask}>
              <Link className={styles.text} to={"/tasks/new"}>
                New Task
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.topHalf}>
          <div className={styles.buttonBox}>
            <div className={styles.AllTasks}>
              <Link className={styles.text} to={"/Home"}>
                All Tasks
              </Link>
            </div>
          </div>

          <div className={styles.buttonBox}>
            <div className={styles.HighP}>
              <Link className={styles.text} to={"/task/todo"}>
                TODO
              </Link>
            </div>
          </div>

          <div className={styles.buttonBox}>
            <div className={styles.MedP}>
              <Link className={styles.text} to={"/task/inprogress"}>
                IN-PROGRESS
              </Link>
            </div>
          </div>

          <div className={styles.buttonBox}>
            <div className={styles.LowP}>
              <Link className={styles.text} to={"/task/testing"}>
                TESTING
              </Link>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <div className={styles.MedP}>
              <Link className={styles.text} to={"/task/done"}>
                Done Tasks
              </Link>
            </div>
          </div>

          <div className={styles.buttonBox}>
            <div className={styles.LowP}>
              <Link className={styles.text} to={"/task/paid"}>
                Paid Tasks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
