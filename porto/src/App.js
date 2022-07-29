import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
