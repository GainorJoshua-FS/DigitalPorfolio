import './App.css';
import Header from './components/header';

function App() {
  return (
    <main style={styles.main}>
      <Header />
      <h1>Hello World</h1>
    </main>
  );
}

export default App;

const styles = {
  main:{
    backgroundColor: "#c2c0c1"
  }
}