// modules/Home/HomePage.tsx

import React from "react";
import styles from "./Home.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our Next.js application.</p>
    </div>
  );
};

export default HomePage;
