import React from "react";
import styles from "./Navbar.module.css";

const Header = () => {
  return (
    <div className={styles.background}>
      <div>
        <h1 className={styles.title}>Todo List</h1>
      </div>
    </div>
  );
};

export default Header;
