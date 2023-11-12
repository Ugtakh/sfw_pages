import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className={styles.loading}
        width={40}
        height={40}
        src="assets/images/logo/favicon.png"
        alt=""
      />
    </div>
  );
};

export default Loading;
