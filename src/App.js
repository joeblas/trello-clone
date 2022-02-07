import styles from './App.module.css'
import { Board } from './components'

function App() {
  return (
    <div className={styles.root}>
      <Board />
    </div>
  );
}

export default App;
