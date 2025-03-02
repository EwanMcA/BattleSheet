import { Link } from "react-router";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.nav}>
      <h2>Armies</h2>
      <Link to="/1">1</Link>
      <h2>Factions</h2>
      <Link to="/faction/tau">Tau</Link>
      <Link to="/faction/death-guard">Death Guard</Link>
    </div>
  );
};

export default Home;
