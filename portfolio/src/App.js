import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GameNight from './components/GameNight';
import Home from './components/Home';
import Kanban from './components/Kanban';
import Quiz from './components/Quiz';

function App() {
  return (
    <main style={styles.main}>
      <BrowserRouter>
        <Header />
        {/* <AboutMe />
        <Projects />
        <Experience /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gamenight" element={<GameNight />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
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