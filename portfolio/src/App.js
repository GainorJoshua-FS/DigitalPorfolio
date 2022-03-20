import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <main style={styles.main}>
      <BrowserRouter>
        <Header />
        <AboutMe />
        <Projects />
        <Experience />
        {/* <Routes>

        </Routes> */}
        <Footer />
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