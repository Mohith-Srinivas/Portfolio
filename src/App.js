import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skills from "./Skills_&_Hobbies/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;