import type { Component } from "solid-js";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import styles from "./css/App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div>
        <Header />
      </div>
      <div>
        <Canvas />
      </div>
    </div>
  );
};

export default App;
