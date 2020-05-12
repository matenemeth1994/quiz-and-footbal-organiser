import React from "react";
import styles from "./Routes.module.scss";
import Organiser from "../Organiser";
import { Router, Link } from "@reach/router";
import Quiz from "../Quiz";
import LandingPage from "../LandingPage";

const Routes = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.links} to="/">Home</Link>
        <Link className={styles.links} to="quiz">Quick Quiz</Link>
        <Link className={styles.links} to="football-team-organiser">Team Organiser</Link>
      </nav>
      <Router>
        <LandingPage path="/" />
        <Quiz path="/quiz" />
        <Organiser path="/football-team-organiser" />
      </Router>
    </>
  );
};

export default Routes;
