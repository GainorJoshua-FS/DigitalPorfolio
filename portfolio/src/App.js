import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <main style={styles.main}>
      <BrowserRouter>
        <Header />
        <h2>Hello World</h2>
        {/* <Routes>

        </Routes> */}
      </BrowserRouter>
    </main>
  );
}

export default App;

const styles = {
  main:{
    backgroundColor: "#c2c0c1",
    textAlign: "center"
  }
}