// modules/About/AboutPage.tsx

import React from "react";
import styles from "./About.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>This is the about page of our Next.js application.</p>
    </div>
  );
};

export default AboutPage;
