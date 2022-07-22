import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';


class FormEvent {
  id: number;
  data: object;
  dateCreated: number;

  constructor(data: object) {
    this.id = 1;
    this.data = data;
    this.dateCreated = Date.now();
  }
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        In pain
      </header>
    </div>
  );
};

export default App;
