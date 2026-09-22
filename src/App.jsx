import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home.jsx";
import Projects from "./Proyectos.jsx";
import Contact from "./contacto.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
